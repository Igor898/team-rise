import Container from "./Container";

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.8-4.7 4.56-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.94-1.97 1.9v2.28h3.35l-.54 3.5H13.9V24C19.62 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 7.9-1.97 9.28c-.15.66-.54.82-1.1.51l-3.03-2.24-1.47 1.42c-.16.16-.3.3-.61.3l.22-3.12 5.67-5.12c.25-.22-.05-.34-.38-.12L8.2 13.24 5.17 12.3c-.66-.2-.67-.66.14-.98l11.85-4.57c.55-.2 1.02.13.73 1.15z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.03-1.84-3.03-1.85 0-2.13 1.44-2.13 2.93v5.68H9.36V9h3.42v1.56h.05c.48-.9 1.63-1.84 3.36-1.84 3.6 0 4.26 2.37 4.26 5.45v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.78 1.78 0 0 0 0 1.8v20.4C0 23.2.8 24 1.77 24h20.45c.97 0 1.78-.8 1.78-1.8V1.8c0-1-.8-1.8-1.78-1.8z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.9.58 9.4.58 9.4.58s7.5 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M15.2 0c.2 1.9 1.2 3.6 2.8 4.7 1 .7 2.2 1.1 3.5 1.2v3.7a10.4 10.4 0 0 1-6.3-2.1v8.2c0 4.3-3.5 7.8-7.8 7.8S-.4 20 .4 15.9a7.8 7.8 0 0 1 9.9-5.8v3.9A3.9 3.9 0 1 0 11.5 17V0h3.7z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#061626] to-[#071a2d] text-white mt-16">
      <Container>
        <div className="py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <p className="text-white/90 text-2xl">Социальные сети</p>
              <div className="flex items-center gap-3">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-[#9EC9FF]"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 text-white/90 text-2xl">
              <span>Контакты</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-7 w-7 text-white/90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.8 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.4 1.7.7 2.6.8A2 2 0 0 1 22 16.9z" />
              </svg>
              <a href="tel:+77765086000" className="hover:text-white">
                +7 (776)-508-60-00
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/35 pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-white font-semibold text-3xl">TR2.kz</p>
            <p className="text-white/80 text-2xl">© 2026 Все права защищены</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
