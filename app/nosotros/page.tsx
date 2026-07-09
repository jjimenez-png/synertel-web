import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 pt-20 text-white">

        {/* HERO */}

        <section className="relative flex min-h-[60vh] items-center overflow-hidden">

          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Nosotros"
            fill
            priority
            className="object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">

            <p className="uppercase tracking-[0.35em] text-sky-400 font-semibold">
              SOBRE SYNERTEL
            </p>

            <h1 className="mt-6 text-6xl font-bold">
              Ingeniería que conecta el futuro.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Somos una empresa peruana especializada en soluciones de
              telecomunicaciones, ciberseguridad, Centros C5, Smart Cities,
              transformación digital y gestión de proyectos tecnológicos.
            </p>

          </div>

        </section>

        {/* CONTENIDO */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <h2 className="text-4xl font-bold">
                Nuestra Historia
              </h2>

              <p className="mt-8 leading-9 text-slate-300">
                SYNERTEL nace con el propósito de integrar ingeniería,
                innovación y gestión para desarrollar proyectos tecnológicos
                de alto impacto para entidades públicas y empresas privadas.
              </p>

              <p className="mt-6 leading-9 text-slate-400">
                Nuestro enfoque combina experiencia técnica,
                planificación estratégica y una visión de largo plazo para
                crear soluciones sostenibles y escalables.
              </p>

            </div>

            <div className="overflow-hidden rounded-3xl">

              <img
                src="/images/projects/proyecto-01.jpg"
                alt="Proyecto"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="bg-sky-600 py-20">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <h2 className="text-4xl font-bold">
              Conozca cómo podemos impulsar su próximo proyecto.
            </h2>

            <Link
              href="/"
              className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-sky-700"
            >
              Volver al Inicio
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}