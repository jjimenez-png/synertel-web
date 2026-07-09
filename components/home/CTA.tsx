import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="bg-sky-600 py-24">
      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            ¿Tiene un proyecto tecnológico?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-sky-100">
            Nuestro equipo puede acompañarlo desde la planificación hasta la
            implementación de soluciones en telecomunicaciones,
            ciberseguridad, Centros C5, Smart Cities y Obras por Impuestos.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="#contacto"
              className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-sky-700 transition hover:bg-slate-100"
            >
              Solicitar Consultoría
            </a>

            <a
              href="mailto:ventas@synertelgrp.com"
              className="rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-sky-700"
            >
              ventas@synertelgrp.com
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}