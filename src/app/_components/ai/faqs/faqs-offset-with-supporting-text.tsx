import { AiComponentProps } from "@/app/_components/ai/base/ai-component-props";
import ThemeOverlay from "@/app/_components/ai/base/theme-overlay";

const faqs = [
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function FaqsOffsetWithSupportingText({
  theme,
}: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2
                className={`text-2xl font-bold leading-10 tracking-tight ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Frequently asked questions
              </h2>
              <p
                className={`mt-4 text-base leading-7 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <a
                  href="#"
                  className={`font-semibold ${
                    theme === "dark"
                      ? "text-indigo-500 hover:text-indigo-400"
                      : "text-indigo-600 hover:text-indigo-500"
                  }`}
                >
                  customer support
                </a>{" "}
                team.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt
                      className={`text-base font-semibold leading-7 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </dt>
                    <dd
                      className={`mt-2 text-base leading-7 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
