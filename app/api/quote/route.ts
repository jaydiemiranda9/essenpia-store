// TODO: wire up Resend for email delivery and Vercel KV for submission logging in v2.
// For v1: validate, honeypot-check, log to stdout (visible in Vercel dashboard → Logs).

import { NextRequest, NextResponse } from "next/server";

interface QuotePayload {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  role?: string;
  categoryInterest: string;
  productInterest?: string;
  quantityRange: string;
  timeline: string;
  message?: string;
  consent: string;
  hp_company_website?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: QuotePayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill this hidden field, humans don't
  if (body.hp_company_website && body.hp_company_website.trim() !== "") {
    // Silently accept to not tip off the bot
    return NextResponse.json({ success: true });
  }

  const { fullName, company, email, phone, categoryInterest, quantityRange, timeline, consent } = body;

  if (!fullName?.trim()) return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  if (!company?.trim()) return NextResponse.json({ error: "Company name is required." }, { status: 400 });
  if (!email?.trim() || !isValidEmail(email)) return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  if (!phone?.trim()) return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  if (!categoryInterest?.trim()) return NextResponse.json({ error: "Please select a category." }, { status: 400 });
  if (!quantityRange?.trim()) return NextResponse.json({ error: "Please select a quantity range." }, { status: 400 });
  if (!timeline?.trim()) return NextResponse.json({ error: "Please select a project timeline." }, { status: 400 });
  if (consent !== "true") return NextResponse.json({ error: "Please accept the consent checkbox." }, { status: 400 });

  const submission = {
    timestamp: new Date().toISOString(),
    fullName: fullName.trim(),
    company: company.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    role: body.role?.trim() ?? "",
    categoryInterest,
    productInterest: body.productInterest?.trim() ?? "",
    quantityRange,
    timeline,
    message: body.message?.trim() ?? "",
  };

  console.log("[essenpia-quote]", JSON.stringify(submission, null, 2));

  return NextResponse.json({ success: true });
}
