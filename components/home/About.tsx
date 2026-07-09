import Container from "@/components/layout/Container";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-slate-950 py-28 border-b border-slate-800"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Texto */}

          <div>

            <p className="uppercase tracking-[0.35em] text-sky-400 font-semibold mb-4">
              QUIÉNES SOMOS
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight">
              Ingeniería y tecnología para proyectos de alto impacto.
            </h2>

            <p className="mt-8 text-slate-300 leading-9 text-lg">
              En <strong>SYNERTEL GROUP S.A.C.S.</strong> diseñamos,
              integramos e implementamos soluciones tecnológicas para el
              sector público y privado, contribuyendo a la transformación
              digital mediante infraestructura crítica, telecomunicaciones,
              ciberseguridad y sistemas inteligentes.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
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
              <p className="mt-3 text-white font-semibold">
                Años de experiencia
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-4xl font-bold text-sky-400">50+</h3>
              <p className="mt-3 text-white font-semibold">
                Proyectos tecnológicos
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-4xl font-bold text-sky-400">24/7</h3>
              <p className="mt-3 text-white font-semibold">
                Soporte especializado
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-4xl font-bold text-sky-400">100%</h3>
              <p className="mt-3 text-white font-semibold">
                Cobertura nacional
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}