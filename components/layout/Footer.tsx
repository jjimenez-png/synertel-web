import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container className="py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Empresa */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/logos/logo-synertel.png"
                alt="SYNERTEL"
                width={48}
                height={48}
              />

              <div>

                <h3 className="text-xl font-bold text-white">
                  SYNERTEL
                </h3>

                <p className="text-sm text-sky-400">
                  Tecnología en Sinergia
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Ingeniería, telecomunicaciones, ciberseguridad,
              Centros C5, Smart Cities y transformación digital
              para entidades públicas y empresas privadas.
            </p>

          </div>

          {/* Servicios */}

          <div>

            <h4 className="text-lg font-semibold text-white">
              Servicios
            </h4>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>Telecomunicaciones</li>
              <li>Ciberseguridad</li>
              <li>Centros C5</li>
              <li>Smart Cities</li>
              <li>Transformación Digital</li>
              <li>Obras por Impuestos</li>

            </ul>

          </div>

          {/* Empresa */}

          <div>

            <h4 className="text-lg font-semibold text-white">
              Empresa
            </h4>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>Nosotros</li>
              <li>Proyectos</li>
              <li>Biblioteca</li>
              <li>Contacto</li>

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h4 className="text-lg font-semibold text-white">
              Contacto
            </h4>

            <p className="mt-6 text-slate-400">
              ventas@synertelgrp.com
            </p>

            <p className="mt-3 text-slate-400">
              Cobertura nacional
            </p>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">

          <p className="text-center text-sm text-slate-500">
            © {year} SYNERTEL GROUP S.A.C.S. Todos los derechos reservados.
          </p>

        </div>

      </Container>
    </footer>
  );
}