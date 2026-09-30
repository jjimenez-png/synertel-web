import Container from "@/components/layout/Container";
import CapabilityCard from "./CapabilityCard";

import {
  ShieldCheck,
  RadioTower,
  Building2,
  Cpu,
  Landmark,
  Network,
} from "lucide-react";

const services = [
  {
    icon: RadioTower,
    title: "Telecomunicaciones",
    description:
      "Diseño e implementación de redes de fibra óptica, networking, radioenlaces y comunicaciones críticas.",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad",
    description:
      "SOC, SIEM, Firewall, Zero Trust, Pentesting y protección de infraestructura crítica.",
  },
  {
    icon: Cpu,
    title: "Centros C5",
    description:
      "Videovigilancia inteligente, CAD, GIS, analítica de video e integración NENA i3.",
  },
  {
    icon: Building2,
    title: "Smart Cities",
    description:
      "Plataformas para ciudades inteligentes, movilidad urbana y transformación digital.",
  },
  {
    icon: Landmark,
    title: "Obras por Impuestos",
    description:
      "Consultoría especializada para estructuración y ejecución de proyectos OxI.",
  },
  {
    icon: Network,
    title: "Transformación Digital",
    description:
      "Infraestructura TI, nube, automatización y modernización tecnológica.",
  },
];

export default function Capabilities() {
  return (
    <section id="capacidades" className="bg-slate-900 py-28">
      <Container>
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-sky-400">
            CAPACIDADES
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Soluciones tecnológicas integrales
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Diseñamos, implementamos e integramos soluciones de alto impacto
            para organizaciones públicas y privadas.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <CapabilityCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}