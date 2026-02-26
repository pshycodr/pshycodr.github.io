import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80vh] w-full max-w-5xl flex-col items-start justify-center px-5 lg:px-10">
      <div className="mb-10 w-full border-b border-(--color-border) pb-8">
        <p className="mb-6 text-xs tracking-[0.08em] text-(--color-text-muted)">
          error / 404
        </p>
        <h1 className="text-[clamp(5rem,18vw,12rem)] leading-[0.9] font-medium tracking-[-0.05em] text-(--color-surface)">
          404
        </h1>
      </div>

      <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="mb-2 text-lg font-medium tracking-[-0.01em] text-(--color-text-main)">
            Post not found.
          </h2>
          <p className="max-w-90 text-sm leading-relaxed text-(--color-text-secondary) italic">
            This page doesn&apos;t exist or has been moved. Check the URL or
            head back home.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
          <Link
            href="/"
            className="bg-(--color-primary) px-4 py-2 text-xs font-medium text-[#0f0f0f] transition-opacity hover:opacity-75"
          >
            ← back home
          </Link>
          <p className="text-xs text-(--color-text-muted)">or check the URL</p>
        </div>
      </div>
    </div>
  );
}
