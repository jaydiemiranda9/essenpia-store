import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(e164: string): string {
  return e164;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://essenpia-store.vercel.app";
