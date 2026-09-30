import Container from "@/components/layout/Container";

export default function Contact() {
  return (
    <section id="contacto" className="bg-slate-950 py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Información */}
          <div>
            <p className="font-semibold uppercase tracking-[0.35em] text-sky-400">
              CONTACTO
            </p>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Conversemos sobre su próximo proyecto.
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              Nuestro equipo está preparado para acompañarlo en proyectos de
              telecomunicaciones, Centros C5, ciberseguridad, Smart Cities,
              transformación digital y Obras por Impuestos.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-slate-400">Correo</p>
                <p className="text-xl font-semibold text-white">
                  ventas@synertelgrp.com
                </p>
              </div>

              <div>
                <p className="text-slate-400">Cobertura</p>
                <p className="text-xl font-semibold text-white">
                  Todo el Perú
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            action="/api/contact"
            method="POST"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-sky-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-sky-500"
              />

              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-sky-500"
              />

              <textarea
                name="mensaje"
                rows={6}
                placeholder="Cuéntenos sobre su proyecto..."
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-sky-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-sky-500 py-4 text-lg font-semibold text-white transition hover:bg-sky-400"
              >
                Enviar consulta
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}