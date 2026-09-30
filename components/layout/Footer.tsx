import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container className="py-14">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* =====================================================
              SYNERTEL
          ===================================================== */}
          <div>

            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <Image
                src="/images/logos/logo-synertel.png"
                alt="SYNERTEL"
                width={52}
                height={52}
                className="h-[52px] w-[52px] object-contain"
              />

              <div>
                <h3 className="text-xl font-bold text-white">
                  SYNERTEL
                </h3>

                <p className="text-sm text-sky-400">
                  Tecnología en Sinergia
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Ingeniería, telecomunicaciones, ciberseguridad,
              Centros C5, Smart Cities y transformación digital
              para entidades públicas y empresas privadas.
            </p>

          </div>

          {/* =====================================================
              SERVICIOS
          ===================================================== */}
          <div>

            <h4 className="text-base font-semibold text-white">
              Servicios
            </h4>

            <ul className="mt-6 space-y-3 text-sm text-slate-400">

              <li>
                <Link
                  href="/#capacidades"
                  className="transition hover:text-sky-400"
                >
                  Telecomunicaciones
                </Link>
              </li>

              <li>
                <Link
                  href="/fortinet"
                  className="transition hover:text-sky-400"
                >
                  Ciberseguridad
                </Link>
              </li>

              <li>
                <Link
                  href="/#c5"
                  className="transition hover:text-sky-400"
                >
                  Centros C5
                </Link>
              </li>

              <li>
                <Link
                  href="/#capacidades"
                  className="transition hover:text-sky-400"
                >
                  Smart Cities
                </Link>
              </li>

              <li>
                <Link
                  href="/#capacidades"
                  className="transition hover:text-sky-400"
                >
                  Transformación Digital
                </Link>
              </li>

              <li>
                <Link
                  href="/#capacidades"
                  className="transition hover:text-sky-400"
                >
                  Obras por Impuestos
                </Link>
              </li>

            </ul>

          </div>

          {/* =====================================================
              EMPRESA
          ===================================================== */}
          <div>

            <h4 className="text-base font-semibold text-white">
              Empresa
            </h4>

            <ul className="mt-6 space-y-3 text-sm text-slate-400">

              <li>
                <Link
                  href="/nosotros"
                  className="transition hover:text-sky-400"
                >
                  Nosotros
                </Link>
              </li>

              <li>
                <Link
                  href="/#proyectos"
                  className="transition hover:text-sky-400"
                >
                  Proyectos
                </Link>
              </li>

              <li>
                <Link
                  href="/#contacto"
                  className="transition hover:text-sky-400"
                >
                  Biblioteca
                </Link>
              </li>

              <li>
                <Link
                  href="/#contacto"
                  className="transition hover:text-sky-400"
                >
                  Contacto
                </Link>
              </li>

            </ul>

          </div>

          {/* =====================================================
              CONTACTO
          ===================================================== */}
          <div>

            <h4 className="text-base font-semibold text-white">
              Contacto
            </h4>

            <a
              href="mailto:ventas@synertelgrp.com"
              className="mt-6 block text-sm text-slate-400 transition hover:text-sky-400"
            >
              ventas@synertelgrp.com
            </a>

            <p className="mt-3 text-sm text-slate-400">
              Cobertura nacional
            </p>

            <Link
              href="/#contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Solicitar consultoría
              <span>→</span>
            </Link>

          </div>

        </div>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}
        <div className="mt-12 border-t border-slate-800 pt-7">

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <p className="text-xs text-slate-500">
              © {year} SYNERTEL GROUP S.A.C.S. Todos los derechos reservados.
            </p>

            <p className="text-xs text-slate-600">
              Tecnología en Sinergia
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
}