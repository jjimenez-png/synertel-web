import Image from "next/image";
import Container from "@/components/layout/Container";

const projects = [
  { image: "/images/projects/proyecto-01.jpg" },
  { image: "/images/projects/proyecto-02.jpg" },
  { image: "/images/projects/proyecto-03.jpg" },
  { image: "/images/projects/proyecto-04.jpg" },
  { image: "/images/projects/proyecto-05.jpg" },
  { image: "/images/projects/proyecto-06.jpg" },
  { image: "/images/projects/proyecto-07.jpg" },
  { image: "/images/projects/proyecto-08.jpg" },
  { image: "/images/projects/proyecto-09.jpg" },
  { image: "/images/projects/proyecto-10.jpg" },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-slate-900 py-32"
    >
      <Container>

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-sky-400 font-semibold">
            PROYECTOS
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Experiencia que genera confianza
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
            Algunos de los proyectos desarrollados por SYNERTEL en
            telecomunicaciones, infraestructura tecnológica,
            seguridad ciudadana y transformación digital.
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

          {projects.map((project) => (

            <div
              key={project.image}
              className="group overflow-hidden rounded-2xl"
            >

             <img
  src={project.image}
  alt="Proyecto"
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
/>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}