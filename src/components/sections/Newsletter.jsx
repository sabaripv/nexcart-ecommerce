function Newsletter() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-[#0B1120] p-10 md:p-16">

          {/* Apple-style glow */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Stay Updated
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Get Exclusive Deals &
              <br />
              New Product Updates
            </h2>

            <p className="mt-5 text-gray-400">
              Subscribe to receive special offers, product launches and
              exclusive discounts directly in your inbox.
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-center">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-blue-500"
              />

              <button className="w-fit self-center rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] md:self-auto">
                Subscribe
                </button>
                
              

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;