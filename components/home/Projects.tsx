import Image from "next/image";
import Container from "@/components/layout/Container";

const projects = [
  "/images/optimized/proyecto-01.jpg",
  "/images/optimized/proyecto-02.jpg",
  "/images/optimized/proyecto-03.jpg",
  "/images/optimized/proyecto-04.jpg",
  "/images/optimized/proyecto-05.jpg",
  "/images/optimized/proyecto-06.jpg",
  "/images/optimized/proyecto-07.jpg",
  "/images/optimized/proyecto-08.jpg",
  "/images/optimized/proyecto-09.jpg",
  "/images/optimized/proyecto-10.jpg",
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-slate-900 py-32">
      <Container>
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-sky-400">
            PROYECTOS
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Experiencia que genera confianza
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Algunos de los proyectos desarrollados por SYNERTEL en
            telecomunicaciones, infraestructura tecnológica, seguridad
            ciudadana y transformación digital.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {projects.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={`Proyecto SYNERTEL ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}