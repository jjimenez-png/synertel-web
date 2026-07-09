import Image from "next/image";
import Container from "@/components/layout/Container";

export default function C5() {
  return (
    <section
      id="c5"
      className="bg-slate-950 py-32"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Imagen */}

          <div className="relative overflow-hidden rounded-3xl border border-slate-800">

            <Image
              src="/images/services/c5.jpg"
              alt="Centro C5"
              width={900}
              height={700}
              className="w-full h-auto object-cover"
            />

          </div>

          {/* Contenido */}

          <div>

            <p className="uppercase tracking-[0.35em] text-sky-400 font-semibold">
              CENTROS C5
            </p>

            <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
              Centros de Comando, Control, Comunicaciones, Cómputo y Coordinación.
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              Diseñamos e integramos Centros C5 para fortalecer la seguridad
              ciudadana mediante plataformas tecnológicas de última generación,
              interoperabilidad y analítica basada en inteligencia artificial.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                🎥 Videovigilancia Inteligente
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                📍 GIS
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                🚓 CAD / Despacho
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                🤖 Analítica con IA
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                ☎ Integración NENA i3
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                📡 Plataforma Unificada
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}