import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string(),
  email: z.string().optional(),
  elevatorName: z.string(),
  elevatorCount: z.string(),
  basementCount: z.string(),
  floorCount: z.string(),
  passengerCapacity: z.string(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedData = contactSchema.parse(body);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificates
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL,

      subject: `New Contact Form Submission - ${validatedData.name}`,

      html: `
        <h2>New Contact Inquiry</h2>

        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Email:</strong> ${validatedData.email || "N/A"}</p>

        <hr/>

        <p><strong>Elevator Name:</strong> ${validatedData.elevatorName}</p>
        <p><strong>Elevator Count:</strong> ${validatedData.elevatorCount}</p>
        <p><strong>Basement Count:</strong> ${validatedData.basementCount}</p>
        <p><strong>Floor Count:</strong> ${validatedData.floorCount}</p>
        <p><strong>Passenger Capacity:</strong> ${validatedData.passengerCapacity}</p>

        <hr/>

        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}