import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function CapabilityCard({
  icon: Icon,
  title,
  description,
}: CapabilityCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-800 bg-slate-950 p-10 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10">
        <Icon size={34} className="text-sky-400" />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-slate-400">
        {description}
      </p>

      <Link
        href="/#contacto"
        className="mt-8 inline-block font-semibold text-sky-400 transition group-hover:translate-x-2"
      >
        Más información →
      </Link>
    </article>
  );
}