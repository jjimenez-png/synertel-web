import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Capabilities from "@/components/home/Capabilities";
import C5 from "@/components/home/C5";
import Cybersecurity from "@/components/home/Cybersecurity";
import Projects from "@/components/home/Projects";
import Oxi from "@/components/home/Oxi";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">

        {/* HERO */}

        <section className="relative flex min-h-screen items-center overflow-hidden">

          <Image
            src="/images/hero/hero-bg.jpg"
            alt="SYNERTEL"
            fill
            priority
            className="object-cover object-center opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="mb-6 text-sm font-bold uppercase tracking-[0.40em] text-sky-400">
                TECNOLOGÍA EN SINERGIA
              </p>

              <h1 className="text-6xl font-extrabold leading-tight md:text-7xl xl:text-8xl">
                Ingeniería para un mundo conectado.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
                Soluciones en Telecomunicaciones, Ciberseguridad,
                Centros C5, Smart Cities e Infraestructura Tecnológica
                para gobiernos y empresas.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  href="/#capacidades"
                  className="rounded-xl bg-sky-500 px-8 py-4 text-lg font-semibold transition hover:bg-sky-400"
                >
                  Conocer Servicios
                </Link>

                <Link
                  href="/#proyectos"
                  className="rounded-xl border border-slate-500 px-8 py-4 text-lg font-semibold transition hover:border-sky-400"
                >
                  Ver Proyectos
                </Link>

              </div>

            </div>

          </div>

        </section>

        <Stats />

        <About />

        <Capabilities />

        <C5 />

        <Cybersecurity />

        <Projects />

        <Oxi />

        <CTA />

        <Contact />

        <Footer />

      </main>

    </>
  );
}