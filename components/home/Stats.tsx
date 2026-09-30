import Container from "@/components/layout/Container";

const stats = [
  {
    value: "50+",
    title: "Proyectos",
    description: "Implementados",
  },
  {
    value: "15+",
    title: "Años",
    description: "Experiencia acumulada",
  },
  {
    value: "24/7",
    title: "Soporte",
    description: "Operación continua",
  },
  {
    value: "100%",
    title: "Cobertura",
    description: "Perú",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-800 bg-slate-900">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.title} className="text-center">
              <h2 className="text-5xl font-bold text-sky-400">
                {item.value}
              </h2>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}