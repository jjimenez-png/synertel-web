import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SYNERTEL | Tecnología en Sinergia",
    template: "%s | SYNERTEL",
  },

  description:
    "SYNERTEL GROUP S.A.C.S. desarrolla soluciones en Telecomunicaciones, Centros C5, Ciberseguridad, Smart Cities, Transformación Digital y Obras por Impuestos.",

  keywords: [
    "SYNERTEL",
    "Telecomunicaciones",
    "Centros C5",
    "C5",
    "Smart City",
    "Ciberseguridad",
    "Transformación Digital",
    "Fibra Óptica",
    "Obras por Impuestos",
    "Perú",
  ],

  authors: [
    {
      name: "SYNERTEL GROUP S.A.C.S.",
    },
  ],

  creator: "SYNERTEL GROUP S.A.C.S.",

  metadataBase: new URL("https://synertelgrp.com"),

  openGraph: {
    title: "SYNERTEL | Tecnología en Sinergia",
    description:
      "Ingeniería para un mundo conectado.",
    url: "https://synertelgrp.com",
    siteName: "SYNERTEL",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SYNERTEL | Tecnología en Sinergia",
    description: "Ingeniería para un mundo conectado.",
    images: ["/images/hero/hero-bg.jpg"],
  },

  icons: {
    icon: "/images/logos/logo-synertel.png",
    shortcut: "/images/logos/logo-synertel.png",
    apple: "/images/logos/logo-synertel.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}