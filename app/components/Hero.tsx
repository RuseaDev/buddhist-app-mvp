export default function Hero() {
  return (
    <section
      className="relative flex h-screen w-screen items-center justify-center
                 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay for blending */}
      <div className="absolute inset-0 bg-black/40 sm:bg-gradient-to-t sm:from-black/60 sm:via-rose-900/40 sm:to-transparent" />

      {/* Content */}
      <div className="relative text-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <h1
          className="
            font-serif leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl
            tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.32em]
            text-white drop-shadow-lg
          "
        >
          LEARN
          <br />
          DHARMA
        </h1>

        <p className="mt-3 text-sm sm:mt-4 sm:text-base md:mt-5 md:text-lg text-neutral-200">
          Loren Ipsum
        </p>

        <div className="mt-5 sm:mt-6">
          <a
            href="/Foundations"
            className="
              inline-flex items-center rounded-full
              px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base
              font-medium text-white
              bg-rose-600 hover:bg-rose-700
              shadow-sm ring-1 ring-rose-900/20 transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400
            "
          >
            Start Learning
          </a>
        </div>
      </div>
    </section>
  );
}
