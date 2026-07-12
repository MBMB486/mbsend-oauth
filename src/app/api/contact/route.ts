import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Configura o transportador SMTP da one.com
    const transporter = nodemailer.createTransport({
      host: 'send.one.com',
      port: 465,
      secure: true, // true para 465, false para outras portas
      auth: {
        user: 'no-reply@mbsend.com',     // email que envia
        pass: 'password',              // password desse email
      },
    });

    // Envia para os dois destinatários
    await transporter.sendMail({
      from: `"MB Send Contact" <no-reply@mbsend.com>`,
      to: 'support.ia@mbsend.com, geralinfo@mbsend.com', // destinatários
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}