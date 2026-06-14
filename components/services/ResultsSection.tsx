export default function ResultsSection() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange">
              Real Results
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-navy">
              Thousands Of Successful Fitness Journeys
            </h2>

            <p className="mt-5 text-lg text-navy/70">
              From weight loss and muscle gain to improved mobility and
              healthier lifestyles, CoachKart clients achieve sustainable
              results through personalized coaching.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-extrabold text-orange">5000+</h3>
                <p className="mt-2 text-navy/70">Sessions Completed</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-extrabold text-orange">100+</h3>
                <p className="mt-2 text-navy/70">Certified Coaches</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-extrabold text-orange">4.9★</h3>
                <p className="mt-2 text-navy/70">Average Rating</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-extrabold text-orange">95%</h3>
                <p className="mt-2 text-navy/70">Client Retention</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop"
              alt="Fitness Success Story"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
