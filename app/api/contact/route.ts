import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/*
    Receives an enquiry from the contact or tour form and emails it on.

    Credentials live in .env.local (never in the code):
      MAIL_USER  the Gmail address that sends
      MAIL_PASS  a Gmail App Password, not the account password
      MAIL_TO    where enquiries should land
*/

export async function POST(request: Request) {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Please fill in your name, email and message." },
            { status: 400 }
        );
    }

    const user = process.env.MAIL_USER;
    // Google shows app passwords in four groups of four; the spaces are display only.
    const pass = process.env.MAIL_PASS?.replace(/\s/g, "");
    const to = process.env.MAIL_TO ?? user;

    if (!user || !pass) {
        return NextResponse.json(
            { error: "Email is not set up yet. Add MAIL_USER and MAIL_PASS to .env.local." },
            { status: 500 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user, pass },
        });

        await transporter.sendMail({
            from: `"Bright Anchor website" <${user}>`,
            to,
            replyTo: email,
            subject: subject ? `Enquiry: ${subject}` : `Enquiry from ${name}`,
            text: [
                `Name:    ${name}`,
                `Email:   ${email}`,
                `Phone:   ${phone || "not given"}`,
                `Subject: ${subject || "not given"}`,
                "",
                message,
            ].join("\n"),
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Enquiry could not be sent:", error);
        return NextResponse.json(
            { error: "Something went wrong sending your message. Please call us instead." },
            { status: 500 }
        );
    }
}
