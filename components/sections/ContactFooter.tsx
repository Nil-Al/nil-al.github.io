import { Phone, Mail } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+63 977 116 6073",
    href: "tel:+639771166073",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "nilbenedictalvarez@gmail.com",
    href: "mailto:nilbenedictalvarez@gmail.com",
  },
  {
    icon: <LinkedInIcon className="h-5 w-5" />,
    label: "LinkedIn",
    value: "Nil Benedict Alvarez",
    href: "https://www.linkedin.com/in/nil-benedict-alvarez-9477803a8/",
  },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="w-full mt-auto">
      {/* Contact Section */}
      <div className="border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              Contact Me
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base text-zinc-400">
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "LinkedIn" ? "_blank" : undefined}
                rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm hover:border-emerald-500/40 hover:bg-zinc-900/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-800/60 text-zinc-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all duration-300 mb-4">
                  {link.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                  {link.label}
                </span>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors break-all sm:break-normal">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/60 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Nil Benedict Alvarez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
