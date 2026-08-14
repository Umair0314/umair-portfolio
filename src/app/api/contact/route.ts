import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // In a fully deployed setup, this is where you would connect NodeMailer, Postmark, or SendGrid.
    // For now, we log the details to the server terminal to prove receipt.
    console.log("====== NEW CONTACT FORM SUBMISSION ======");
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("=========================================");

    return NextResponse.json({ success: true, message: "Message received successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
