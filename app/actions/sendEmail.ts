"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jumanajouhar@gmail.com",
      replyTo: formData.email,
      subject: formData.subject || `Portfolio Contact from ${formData.fullName}`,
      text: `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}