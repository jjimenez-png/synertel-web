import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="Infraestructura tecnológica SYNERTEL"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-sky-400 sm:text-base">
            TECNOLOGÍA EN SINERGIA
          </p>

          <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Ingeniería para
            <br />
            un mundo
            <br />
            conectado.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-9 text-slate-200 sm:text-xl">
            Soluciones en Telecomunicaciones, Ciberseguridad, Centros C5,
            Smart Cities e Infraestructura Tecnológica para gobiernos y
            empresas.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              href="#capacidades"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-4 text-base font-bold text-white transition hover:bg-sky-400"
            >
              Conocer Servicios
            </Link>

            <Link
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500 px-8 py-4 text-base font-bold text-white transition hover:border-sky-400 hover:bg-sky-500/10"
            >
              Ver Proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}