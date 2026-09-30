import Container from "@/components/layout/Container";

export default function About() {
  return (
    <section
      id="nosotros"
      className="border-b border-slate-800 bg-slate-950 py-28"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.35em] text-sky-400">
              QUIÉNES SOMOS
            </p>

            <h2 className="text-5xl font-bold leading-tight text-white">
              Ingeniería y tecnología para proyectos de alto impacto.
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              En <strong>SYNERTEL GROUP S.A.C.S.</strong> diseñamos,
              integramos e implementamos soluciones tecnológicas para el
              sector público y privado, contribuyendo a la transformación
              digital mediante infraestructura crítica, telecomunicaciones,
              ciberseguridad y sistemas inteligentes.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Nuestro equipo combina experiencia técnica, capacidad de gestión
              y visión estratégica para desarrollar proyectos que generan valor
              sostenible, incrementan la seguridad y fortalecen la conectividad
              de ciudades, instituciones y empresas.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-4xl font-bold text-sky-400">15+</h3>
              <p className="mt-3 font-semibold text-white">
                Años de experiencia
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-4xl font-bold text-sky-400">50+</h3>
              <p className="mt-3 font-semibold text-white">
                Proyectos tecnológicos
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-4xl font-bold text-sky-400">24/7</h3>
              <p className="mt-3 font-semibold text-white">
                Soporte especializado
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-4xl font-bold text-sky-400">100%</h3>
              <p className="mt-3 font-semibold text-white">
                Cobertura nacional
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
