import Container from "@/components/layout/Container";

export default function Oxi() {
  return (
    <section id="oxi" className="bg-slate-950 py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Imagen */}
          <div className="overflow-hidden rounded-3xl border border-slate-800">
            <img
              src="/images/services/oxi.jpg"
              alt="Obras por Impuestos"
              loading="lazy"
              className="h-[550px] w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <p className="font-semibold uppercase tracking-[0.35em] text-sky-400">
              OBRAS POR IMPUESTOS
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
              Transformamos inversión privada en infraestructura pública.
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              SYNERTEL brinda consultoría integral para proyectos bajo el
              mecanismo de Obras por Impuestos, acompañando a entidades
              públicas y empresas privadas desde la identificación de
              necesidades hasta la ejecución y cierre del proyecto.
            </p>

            <div className="mt-12 space-y-5">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                ✔ Identificación y priorización de proyectos
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                ✔ Formulación y expedientes técnicos
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                ✔ Gestión integral del proceso OxI
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                ✔ Supervisión y asistencia técnica
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                ✔ Acompañamiento hasta la emisión del CIPRL
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}