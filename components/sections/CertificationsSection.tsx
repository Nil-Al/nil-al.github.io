import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";
import { Certification } from "@/types/certification";
import certificationsData from "@/data/certifications.json";

interface CertificationsSectionProps {
  certifications?: Certification[];
}

export default function CertificationsSection({
  certifications = certificationsData as Certification[],
}: CertificationsSectionProps) {
  return (
    <section id="certifications" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 mb-4">
          <Award className="h-3.5 w-3.5" />
          Credentials
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
          Certifications
        </h2>
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Professional
          certifications and credentials earned along the way.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className={`group relative flex flex-col rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm overflow-hidden hover:border-zinc-700 hover:shadow-[0_0_40px_rgba(99,102,241,0.06)] hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${Math.min(index + 1, 6)}`}
          >
            {/* Certificate Image */}
            <div className="relative w-full aspect-[3/2] overflow-hidden bg-zinc-800">
              <Image
                src={cert.image_url}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-5 sm:p-6">
              {/* Issuer badge */}
              <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
                {cert.issuer}
              </span>

              <h3 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors line-clamp-2">
                {cert.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-3 flex-1">
                {cert.description}
              </p>

              {/* View credential link */}
              {cert.credential_url && (
                <a
                  href={cert.credential_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-indigo-400 transition-colors group/link"
                >
                  View Credential
                  <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
