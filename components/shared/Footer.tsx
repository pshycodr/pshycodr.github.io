import Image from "next/image";
import Link from "next/link";

import { personal } from "@/contents/personal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-(--color-border) bg-(--color-bg)">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <div className="flex flex-col gap-8 py-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="shrink-0 overflow-hidden rounded-full border-t border-(--color-border)">
                <Image
                  src="https://avatars.githubusercontent.com/u/115141578?v=4"
                  alt="Anish Roy"
                  width={40}
                  height={40}
                  className="grayscale"
                />
              </div>
              <div>
                <p className="text-sm text-(--color-text-main)">Anish Roy</p>
                <p className="text-xs text-(--color-text-secondary)">
                  Software Developer | AI & Cloud | India
                </p>
              </div>
            </div>

            <p className="max-w-lg font-serif text-sm leading-loose text-(--color-text-secondary) italic">
              Writing about systems, software internals, and the things I learn.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {Object.values(personal.socials).map(
              ({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="group flex items-center gap-1.5 text-xs text-(--color-text-muted) transition-colors"
                >
                  <Icon
                    size={16}
                    className="transition-colors group-hover:stroke-(--color-primary)"
                  />
                  <span className="hidden transition-colors group-hover:text-(--color-text-main) sm:inline">
                    {label}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-(--color-border) py-3">
          <span className="text-[0.65rem] text-(--color-text-muted)">
            © {year} Anish Roy
          </span>
          <span className="text-[0.65rem] text-(--color-text-muted)">
            built with love
          </span>
        </div>
      </div>
    </footer>
  );
}
