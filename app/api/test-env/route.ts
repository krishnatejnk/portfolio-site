import { NextResponse } from "next/server";

export async function GET() {
  const hasKey = !!process.env.RESEND_API_KEY;
  const keyLength = process.env.RESEND_API_KEY?.length || 0;
  const keyPrefix = process.env.RESEND_API_KEY?.substring(0, 3) || "N/A";
  
  return NextResponse.json({
    hasResendKey: hasKey,
    keyLength: keyLength,
    keyPrefix: keyPrefix,
    nodeEnv: process.env.NODE_ENV,
    allEnvKeys: Object.keys(process.env).filter(key => key.includes("RESEND") || key.includes("NEXT"))
  });
}

