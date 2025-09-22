import Image from "next/image";

type CardProps = {
  title: string;
  subtitle?: string;
  body?: string;
  imgSrc?: string;     // optional; falls back to logo
  imgAlt?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function Card({
  title = "Foundations",
  subtitle = "Subheading",
  body = "Body text for your whole article or post.",
  imgSrc,
  imgAlt = "Dharma wheel",
  actionLabel = "Button",
  onAction,
}: CardProps) {
  return (
    <article
      className="flex w-full flex-col items-start gap-4 rounded-xl border border-neutral-200 bg-white
                 p-5 shadow-sm ring-1 ring-black/0 transition-colors hover:border-neutral-300
                 sm:flex-row sm:items-center sm:gap-6 sm:p-6 md:gap-8 md:p-8"
    >
      {/* Left media */}
      <div
        className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-50
                   sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
      >
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={112} // 28*4 (matches lg box)
            height={112}
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
          />
        ) : (
          <Image
            src="/logo.png"
            alt="Dharma wheel"
            width={96}
            height={96}
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
          />
        )}
      </div>

      {/* Right content */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-neutral-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-0.5 text-sm sm:text-[15px] md:text-base text-neutral-600">
            {subtitle}
          </p>
        )}

        {body && (
          <p className="mt-2 text-sm sm:text-[15px] md:text-base lg:text-lg text-neutral-700">
            {body}
          </p>
        )}

        <div className="mt-3">
          <button
            type="button"
            onClick={onAction}
            className="rounded-md border border-neutral-200 bg-neutral-100
                       px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 md:text-base
                       text-neutral-700 hover:bg-neutral-200"
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
