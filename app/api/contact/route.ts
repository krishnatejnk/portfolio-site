import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    if (process.env.NODE_ENV === "development") {
      const envKeys = Object.keys(process.env).filter(key => 
        key.includes("RESEND") || key.includes("NEXT")
      );
      console.log("Environment variables found:", envKeys);
      console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
      console.log("RESEND_API_KEY length:", process.env.RESEND_API_KEY?.length || 0);
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured. Make sure:");
      console.error("1. .env.local file exists in the project root");
      console.error("2. RESEND_API_KEY is set in .env.local");
      console.error("3. The dev server was restarted after creating/updating .env.local");
      console.error("4. No spaces around the = sign in .env.local");
      console.error("5. The file is saved as UTF-8 encoding");
      return NextResponse.json(
        { 
          error: "Email service is not configured. Please restart your dev server (stop with Ctrl+C and run 'npm run dev' again).",
          details: process.env.NODE_ENV === "development" ? "RESEND_API_KEY environment variable is not set. Check the server console for more details." : undefined
        },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      console.error("JSON parsing error:", jsonError);
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["krishnatejnk@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json(
        { 
          error: "Failed to send email. Please try again later.",
          details: process.env.NODE_ENV === "development" ? errorMessage : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    return NextResponse.json(
      { 
        error: "Internal server error. Please try again later.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
        stack: process.env.NODE_ENV === "development" ? errorStack : undefined
      },
      { status: 500 }
    );
  }
}

