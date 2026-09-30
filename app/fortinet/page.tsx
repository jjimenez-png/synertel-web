import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  ShieldCheck,
  Network,
  Wifi,
  ServerCog,
  BarChart3,
  Building2,
  Camera,
  Database,
  Factory,
  ArrowRight,
  CheckCircle2,
  Globe,
  Users,
  Monitor,
  LockKeyhole,
  Activity,
  Settings2,
  Server,
  Radio,
  Eye,
} from "lucide-react";

export default function FortinetPage() {
  const products = [
    {
      icon: ShieldCheck,
      name: "FortiGate",
      category: "PERÍMETRO",
      description:
        "Seguridad perimetral y protección avanzada para redes, usuarios, aplicaciones y conexiones.",
    },
    {
      icon: Network,
      name: "FortiSwitch",
      category: "RED",
      description:
        "Conectividad Ethernet segura e integración con la arquitectura de seguridad de Fortinet.",
    },
    {
      icon: Wifi,
      name: "FortiAP",
      category: "WIRELESS",
      description:
        "Conectividad Wi-Fi empresarial integrada con las políticas de seguridad de la red.",
    },
    {
      icon: Settings2,
      name: "FortiManager",
      category: "GESTIÓN",
      description:
        "Administración centralizada de dispositivos, configuraciones y políticas de seguridad.",
    },
    {
      icon: BarChart3,
      name: "FortiAnalyzer",
      category: "ANÁLISIS",
      description:
        "Visibilidad, análisis de eventos, registros y capacidades de operación de seguridad.",
    },
  ];

  const applications = [
    {
      icon: Building2,
      number: "01",
      title: "Empresas",
      label: "INFRAESTRUCTURA CORPORATIVA",
      description:
        "Protección de usuarios, oficinas, sucursales, aplicaciones y servicios corporativos mediante una arquitectura de seguridad integrada.",
      items: [
        "Usuarios y estaciones de trabajo",
        "Sucursales y oficinas",
        "Aplicaciones corporativas",
        "Acceso remoto y conectividad",
      ],
    },
    {
      icon: Camera,
      number: "02",
      title: "Centros C5",
      label: "SEGURIDAD CIUDADANA",
      description:
        "Protección de redes que soportan videovigilancia, comunicaciones, despacho, servidores y sistemas críticos de operación.",
      items: [
        "Videovigilancia y CCTV",
        "Centro de monitoreo",
        "Comunicaciones críticas",
        "Servidores y sistemas CAD",
      ],
    },
    {
      icon: Database,
      number: "03",
      title: "Data Center",
      label: "SERVICIOS CRÍTICOS",
      description:
        "Segmentación y protección de servidores, aplicaciones, bases de datos y servicios esenciales de la organización.",
      items: [
        "Servidores y virtualización",
        "Bases de datos",
        "Aplicaciones críticas",
        "Segmentación de red",
      ],
    },
    {
      icon: Factory,
      number: "04",
      title: "Infraestructura crítica",
      label: "ALTA DISPONIBILIDAD",
      description:
        "Arquitecturas de seguridad para entornos donde disponibilidad, conectividad, continuidad y control son fundamentales.",
      items: [
        "Redes de alta disponibilidad",
        "Sistemas esenciales",
        "Segmentación y control",
        "Crecimiento de infraestructura",
      ],
    },
  ];

  const services = [
    "Levantamiento y análisis de infraestructura",
    "Diseño de arquitectura de seguridad",
    "Dimensionamiento de soluciones Fortinet",
    "Implementación y configuración",
    "Segmentación de redes y políticas de seguridad",
    "Integración con infraestructura existente",
    "Puesta en operación",
    "Documentación y transferencia técnica",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(14,165,233,0.16),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-28">
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

              <div className="max-w-3xl">
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-sky-500" />

                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
                    SYNERTEL + FORTINET
                  </span>
                </div>

                <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                  Ciberseguridad para
                  <br />
                  <span className="text-sky-400">
                    infraestructura crítica.
                  </span>
                </h1>

                <p className="mt-10 max-w-2xl text-lg leading-9 text-slate-300 sm:text-xl">
                  Diseñamos e implementamos arquitecturas de seguridad para
                  empresas, gobiernos, centros C5, data centers y redes de alta
                  disponibilidad mediante tecnologías Fortinet.
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-500 px-8 py-4 font-bold text-white transition hover:bg-sky-400"
                  >
                    Solicitar evaluación
                    <ArrowRight size={20} />
                  </Link>

                  <Link
                    href="#soluciones"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-8 py-4 font-bold text-white transition hover:border-sky-500 hover:bg-sky-500/10"
                  >
                    Ver soluciones
                  </Link>
                </div>
              </div>

              {/* SECURITY FABRIC */}
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute inset-0 rounded-[3rem] bg-sky-500/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">

                  <div className="absolute left-1/2 top-[27%] h-[46%] w-px -translate-x-1/2 bg-gradient-to-b from-sky-500/0 via-sky-500/60 to-sky-500/0" />

                  <div className="absolute left-[25%] top-1/2 h-px w-[50%] bg-gradient-to-r from-sky-500/0 via-sky-500/50 to-sky-500/0" />

                  <div className="absolute left-[25%] top-[30%] h-[20%] w-px rotate-[38deg] bg-sky-500/20" />

                  <div className="absolute right-[25%] top-[30%] h-[20%] w-px -rotate-[38deg] bg-sky-500/20" />

                  <div className="relative z-10 text-center">
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                      Security Fabric
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      Arquitectura integrada
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 grid grid-cols-2 gap-4">

                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10">
                          <Network size={20} className="text-sky-400" />
                        </div>

                        <div>
                          <p className="font-bold">FortiSwitch</p>
                          <p className="text-xs text-slate-500">
                            Red segura
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10">
                          <Wifi size={20} className="text-sky-400" />
                        </div>

                        <div>
                          <p className="font-bold">FortiAP</p>
                          <p className="text-xs text-slate-500">
                            Wi-Fi seguro
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="relative z-20 mx-auto my-8 flex h-32 w-32 items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/10 shadow-[0_0_70px_rgba(14,165,233,0.18)]">
                    <div className="absolute inset-3 rounded-full border border-sky-500/20" />

                    <div className="text-center">
                      <ShieldCheck
                        size={38}
                        className="mx-auto text-sky-400"
                      />

                      <p className="mt-2 text-sm font-bold">
                        FortiGate
                      </p>

                      <p className="text-[10px] uppercase tracking-wider text-slate-500">
                        Security
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-4">

                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10">
                          <ServerCog size={20} className="text-sky-400" />
                        </div>

                        <div>
                          <p className="font-bold">Data Center</p>
                          <p className="text-xs text-slate-500">
                            Servidores
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10">
                          <Camera size={20} className="text-sky-400" />
                        </div>

                        <div>
                          <p className="font-bold">C5 / CCTV</p>
                          <p className="text-xs text-slate-500">
                            Infraestructura
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="relative z-10 mt-4 flex items-center justify-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                    <BarChart3 size={18} className="text-sky-400" />

                    <span className="text-sm text-slate-300">
                      Gestión y visibilidad centralizada
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            ARQUITECTURA
        ===================================================== */}
        <section className="border-b border-slate-800 bg-slate-900 py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                  Seguridad + conectividad
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Una arquitectura de seguridad integrada.
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-400">
                  La propuesta SYNERTEL + Fortinet integra seguridad y
                  conectividad dentro de una arquitectura diseñada para las
                  necesidades específicas de cada organización.
                </p>

                <p className="mt-6 text-lg leading-9 text-slate-400">
                  Desde el perímetro de red hasta los usuarios, servidores,
                  sistemas de videovigilancia y plataformas críticas,
                  cada componente forma parte de una arquitectura tecnológica
                  planificada.
                </p>
              </div>

              <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950 p-6 sm:p-8">

                <div className="absolute left-1/2 top-24 bottom-24 w-px -translate-x-1/2 bg-gradient-to-b from-sky-500/0 via-sky-500/40 to-sky-500/0" />

                <div className="relative z-10">

                  <div className="mx-auto flex max-w-xs items-center justify-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5">
                    <Globe size={26} className="text-sky-400" />

                    <div>
                      <p className="font-bold">Internet / WAN</p>
                      <p className="text-xs text-slate-500">
                        Conectividad externa
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto h-8 w-px bg-sky-500/40" />

                  <div className="mx-auto flex max-w-xs items-center justify-center gap-4 rounded-2xl border border-sky-500/40 bg-sky-500/10 px-6 py-5">
                    <ShieldCheck size={28} className="text-sky-400" />

                    <div>
                      <p className="font-bold">FortiGate</p>
                      <p className="text-xs text-slate-400">
                        Seguridad perimetral
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto h-8 w-px bg-sky-500/40" />

                  <div className="mx-auto flex max-w-xs items-center justify-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5">
                    <Network size={26} className="text-sky-400" />

                    <div>
                      <p className="font-bold">Red segura</p>
                      <p className="text-xs text-slate-500">
                        Switching + Wi-Fi
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto h-10 w-px bg-sky-500/30" />

                  <div className="grid gap-3 sm:grid-cols-2">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                      <div className="flex items-center gap-3">
                        <Camera size={22} className="text-sky-400" />

                        <div>
                          <p className="font-semibold">C5 / CCTV</p>
                          <p className="text-xs text-slate-500">
                            Videovigilancia
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                      <div className="flex items-center gap-3">
                        <Database size={22} className="text-sky-400" />

                        <div>
                          <p className="font-semibold">Data Center</p>
                          <p className="text-xs text-slate-500">
                            Servidores
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                      <div className="flex items-center gap-3">
                        <Users size={22} className="text-sky-400" />

                        <div>
                          <p className="font-semibold">Usuarios</p>
                          <p className="text-xs text-slate-500">
                            Acceso seguro
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                      <div className="flex items-center gap-3">
                        <Monitor size={22} className="text-sky-400" />

                        <div>
                          <p className="font-semibold">Sistemas</p>
                          <p className="text-xs text-slate-500">
                            Aplicaciones críticas
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            ECOSISTEMA
        ===================================================== */}
        <section
          id="soluciones"
          className="relative overflow-hidden bg-slate-950 py-28"
        >
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Ecosistema Fortinet
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Una plataforma. Diferentes capas de protección.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Integramos los componentes necesarios para construir una
                arquitectura de seguridad alineada con la infraestructura y
                los objetivos de cada proyecto.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {products.map((product, index) => {
                const Icon = product.icon;

                return (
                  <article
                    key={product.name}
                    className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10 ${
                      index === 0 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-500/5 blur-2xl transition group-hover:bg-sky-500/10" />

                    <div className="relative">

                      <div className="flex items-start justify-between">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10">
                          <Icon size={30} className="text-sky-400" />
                        </div>

                        <span className="rounded-full border border-slate-700 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="mt-7 text-2xl font-bold">
                        {product.name}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {product.description}
                      </p>

                      <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-sky-400">
                        <span className="h-px w-8 bg-sky-500/50 transition-all group-hover:w-12" />
                        Seguridad integrada
                      </div>

                    </div>
                  </article>
                );
              })}

            </div>

            <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10">

              <div className="grid gap-8 md:grid-cols-5">

                <div className="flex items-center gap-4">
                  <LockKeyhole size={24} className="text-sky-400" />

                  <div>
                    <p className="font-semibold">Protección</p>
                    <p className="text-xs text-slate-500">Perímetro</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Network size={24} className="text-sky-400" />

                  <div>
                    <p className="font-semibold">Conectividad</p>
                    <p className="text-xs text-slate-500">Red</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Wifi size={24} className="text-sky-400" />

                  <div>
                    <p className="font-semibold">Movilidad</p>
                    <p className="text-xs text-slate-500">Wireless</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Settings2 size={24} className="text-sky-400" />

                  <div>
                    <p className="font-semibold">Control</p>
                    <p className="text-xs text-slate-500">Gestión</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Activity size={24} className="text-sky-400" />

                  <div>
                    <p className="font-semibold">Visibilidad</p>
                    <p className="text-xs text-slate-500">Análisis</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            APLICACIONES
        ===================================================== */}
        <section className="relative overflow-hidden border-y border-slate-800 bg-slate-900 py-28">
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Aplicaciones
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Seguridad diseñada para cada entorno.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                La arquitectura de seguridad se adapta al tipo de
                infraestructura, criticidad de los servicios y necesidades
                operativas de cada organización.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">

              {applications.map((application) => {
                const Icon = application.icon;

                return (
                  <article
                    key={application.title}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-500 sm:p-10"
                  >
                    <div className="absolute right-0 top-0 text-[120px] font-black leading-none text-slate-900 transition group-hover:text-slate-800">
                      {application.number}
                    </div>

                    <div className="relative">

                      <div className="flex items-start justify-between gap-6">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10">
                          <Icon
                            size={30}
                            className="text-sky-400"
                          />
                        </div>

                        <span className="rounded-full border border-slate-800 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                          {application.number}
                        </span>

                      </div>

                      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                        {application.label}
                      </p>

                      <h3 className="mt-3 text-3xl font-bold">
                        {application.title}
                      </h3>

                      <p className="mt-5 max-w-xl leading-8 text-slate-400">
                        {application.description}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">

                        {application.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-sky-400"
                            />

                            <span className="text-sm text-slate-300">
                              {item}
                            </span>
                          </div>
                        ))}

                      </div>

                    </div>
                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            INGENIERÍA SYNERTEL
        ===================================================== */}
        <section className="bg-slate-950 py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-2">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                  Ingeniería SYNERTEL
                </p>

                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                  No solo suministramos tecnología.
                  <br />
                  Diseñamos la solución.
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-400">
                  SYNERTEL integra la tecnología Fortinet dentro de una
                  arquitectura diseñada para el proyecto, considerando
                  infraestructura, comunicaciones, seguridad, disponibilidad
                  y crecimiento futuro.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <Server size={24} className="text-sky-400" />

                    <p className="mt-4 font-semibold">
                      Infraestructura
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Diseño integral
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <Network size={24} className="text-sky-400" />

                    <p className="mt-4 font-semibold">
                      Comunicaciones
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Conectividad segura
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <ShieldCheck size={24} className="text-sky-400" />

                    <p className="mt-4 font-semibold">
                      Seguridad
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Protección integrada
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <Activity size={24} className="text-sky-400" />

                    <p className="mt-4 font-semibold">
                      Disponibilidad
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Continuidad operativa
                    </p>
                  </div>

                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10">

                <h3 className="text-2xl font-bold">
                  Servicios de implementación
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Acompañamos el proyecto desde el análisis inicial hasta la
                  puesta en operación y documentación técnica.
                </p>

                <div className="mt-8 space-y-5">

                  {services.map((service) => (
                    <div
                      key={service}
                      className="flex gap-4"
                    >
                      <CheckCircle2
                        size={22}
                        className="mt-1 shrink-0 text-sky-400"
                      />

                      <span className="leading-7 text-slate-300">
                        {service}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            C5
        ===================================================== */}
        <section className="border-y border-slate-800 bg-slate-900 py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                  SYNERTEL C5
                </p>

                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                  Protección para centros de comando y monitoreo.
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-400">
                  Las redes que soportan videovigilancia, comunicaciones,
                  servidores, estaciones de operación y sistemas municipales
                  requieren una arquitectura de seguridad diseñada desde el
                  inicio.
                </p>

                <p className="mt-6 text-lg leading-9 text-slate-400">
                  SYNERTEL puede integrar la seguridad de red dentro de la
                  arquitectura tecnológica del C5, considerando segmentación,
                  conectividad, servidores y crecimiento de la infraestructura.
                </p>

                <Link
                  href="/#contacto"
                  className="mt-8 inline-flex items-center gap-3 font-semibold text-sky-400 transition hover:text-sky-300"
                >
                  Consultar solución C5
                  <ArrowRight size={19} />
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-10">

                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

                <div className="relative">

                  <div className="text-6xl font-black text-sky-400">
                    C5
                  </div>

                  <p className="mt-5 text-xl font-semibold">
                    Comando · Control · Comunicaciones · Cómputo · Coordinación
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <Camera size={21} className="text-sky-400" />

                      <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                        Seguridad
                      </p>

                      <p className="mt-1 font-semibold">
                        Red protegida
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <Radio size={21} className="text-sky-400" />

                      <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                        Integración
                      </p>

                      <p className="mt-1 font-semibold">
                        Comunicaciones
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <Server size={21} className="text-sky-400" />

                      <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                        Disponibilidad
                      </p>

                      <p className="mt-1 font-semibold">
                        Operación continua
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <Eye size={21} className="text-sky-400" />

                      <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                        Monitoreo
                      </p>

                      <p className="mt-1 font-semibold">
                        Visibilidad
                      </p>
                    </div>

                  </div>

                  <p className="mt-7 leading-8 text-slate-400">
                    Una arquitectura donde la conectividad y la seguridad
                    forman parte del mismo diseño tecnológico.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-sky-500 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-950">
                  SYNERTEL + FORTINET
                </p>

                <h2 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Diseñemos la arquitectura de seguridad de tu proyecto.
                </h2>

                <p className="mt-4 max-w-2xl text-lg text-sky-950">
                  Conversemos sobre infraestructura, conectividad,
                  ciberseguridad y crecimiento.
                </p>
              </div>

              <Link
                href="/#contacto"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-slate-800"
              >
                Solicitar propuesta
                <ArrowRight size={20} />
              </Link>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
