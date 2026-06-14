import FAQAccordion from "@/components/FAQAccordion";

const FAQS = [
  {
    question: "How quickly can I book a session?",
    answer:
      "Most demo sessions can be scheduled within 24–48 hours of your request, depending on coach availability in your area.",
  },
  {
    question: "What exactly is the ₹299 demo session?",
    answer:
      "It's a discounted first session that includes a fitness assessment and a walkthrough of your personalized plan — so you can experience CoachKart before committing to an ongoing program.",
  },
  {
    question: "What if I need to reschedule a session?",
    answer:
      "Just message your coach or our support team in advance, and we'll help you find a new slot that fits your schedule.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We support UPI and major digital payment methods. Specific payment details for your ongoing plan are shared after your demo session.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">
            FAQs
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Common Questions Before You Book
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
