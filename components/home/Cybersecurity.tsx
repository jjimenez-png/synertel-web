import Container from "@/components/layout/Container";
import {
  Shield,
  Lock,
  Server,
  ScanSearch,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "SOC 24/7",
    description: "Centro de Operaciones de Seguridad para monitoreo continuo."
  },
  {
    icon: Lock,
    title: "Zero Trust",
    description: "Arquitecturas basadas en acceso seguro y confianza cero."
  },
  {
    icon: Server,
    title: "SIEM",
    description: "Correlación de eventos y detección avanzada de amenazas."
  },
  {
    icon: ScanSearch,
    title: "Pentesting",
    description: "Evaluaciones de seguridad y pruebas de penetración."
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Protección de infraestructura y servicios en la nube."
  },
  {
    icon: ShieldCheck,
    title: "Respuesta a Incidentes",
    description: "Contención, análisis forense y recuperación."
  },
];

export default function Cybersecurity() {
  return (
    <section
      id="ciberseguridad"
      className="bg-gradient-to-b from-slate-900 to-slate-950 py-32"
    >
      <Container>

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-sky-400 font-semibold">
            CIBERSEGURIDAD
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Protegemos la infraestructura crítica de nuestros clientes
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Implementamos estrategias integrales de ciberseguridad para prevenir,
            detectar y responder a amenazas que afectan la continuidad operativa.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-sky-500 hover:-translate-y-2"
              >

                <Icon
                  size={40}
                  className="text-sky-400"
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>

              </div>
            );

          })}

        </div>

      </Container>
    </section>
  );
}