// Full-width responsive Card component (scales text & image)
export function Card() {
    return (
      <div className="flex w-full flex-col items-start gap-6 border-b border-neutral-200 bg-white p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
        {/* Image placeholder */}
        <div className="flex h-32 w-full items-center justify-center rounded-md bg-neutral-100 sm:h-40 sm:w-56 md:h-48 md:w-72 lg:h-56 lg:w-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-neutral-400 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0l5.159-5.159a2.25 2.25 0 013.182 0L15 18m6 0l-3.182-3.182a2.25 2.25 0 00-3.182 0L9 21"
            />
          </svg>
        </div>
  
        {/* Text content */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-base font-semibold text-neutral-900 sm:text-lg md:text-xl lg:text-2xl">
            Foundations
          </h3>
          <p className="text-xs text-neutral-500 sm:text-sm md:text-base">Subheading</p>
          <p className="mt-2 text-xs text-neutral-700 sm:text-sm md:text-base lg:text-lg">
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look:
          </p>
          <p className="mt-2 text-xs text-neutral-700 sm:text-sm md:text-base lg:text-lg">
            Excepteur efficient emerging, minim veniam anim aute carefully curated
            Ginza conversation exquisite perfect nostrud nisi intricate Content.
            Qui international first-class nulla ut. Punctual adipisicing, essential
            lovely queen tempor eiusmod irure.
          </p>
        </div>
      </div>
    );
  }