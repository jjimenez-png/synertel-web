import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nombre,
      empresa,
      email,
      telefono,
      mensaje,
    } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SYNERTEL Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto web - ${nombre}`,
      text: `
Nombre: ${nombre}
Empresa: ${empresa || "No indicado"}
Email: ${email}
Teléfono: ${telefono || "No indicado"}

Mensaje:
${mensaje}
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error("Error enviando formulario:", error);

    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}