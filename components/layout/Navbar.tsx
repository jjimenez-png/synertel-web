import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/logo-synertel.png"
            alt="SYNERTEL"
            width={46}
            height={46}
            priority
          />

          <div className="leading-tight">
            <h2 className="text-lg font-bold tracking-wider text-white">
              SYNERTEL
            </h2>

            <p className="text-xs text-sky-400">
              Tecnología en Sinergia
            </p>
          </div>
        </Link>

        {/* Menú */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 lg:flex">
          <Link
            href="/"
            className="transition hover:text-sky-400"
          >
            Inicio
          </Link>

          <Link
            href="/nosotros"
            className="transition hover:text-sky-400"
          >
            Nosotros
          </Link>

          <Link
            href="/#capacidades"
            className="transition hover:text-sky-400"
          >
            Capacidades
          </Link>

          <Link
            href="/#proyectos"
            className="transition hover:text-sky-400"
          >
            Proyectos
          </Link>

          <Link
            href="/#contacto"
            className="transition hover:text-sky-400"
          >
            Contacto
          </Link>
        </nav>

        <Link
          href="/#contacto"
          className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          Solicitar Consultoría
        </Link>
      </Container>
    </header>
  );
}