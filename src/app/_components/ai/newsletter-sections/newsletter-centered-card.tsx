import { AiComponentProps } from "@/app/_components/ai/base/ai-component-props";
import ThemeOverlay from "@/app/_components/ai/base/theme-overlay";

export default function NewsletterCenteredCard({ theme }: AiComponentProps) {
  return (
    <div
      className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} py-16 sm:py-24`}
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={`relative isolate overflow-hidden ${
            theme === "dark" ? "bg-black/50" : "bg-gray-100"
          } px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32`}
        >
          <h2
            className={`mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } sm:text-4xl`}
          >
            Get notified when we’re launching.
          </h2>
          <p
            className={`mx-auto mt-2 max-w-xl text-center text-lg leading-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Reprehenderit ad esse et non officia in nulla. Id proident tempor
            incididunt nostrud nulla et culpa.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={
                theme === "dark"
                  ? "min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  : "min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              }
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Notify me
            </button>
          </form>
          <ThemeOverlay theme={theme} />
        </div>
      </div>
    </div>
  );
}
