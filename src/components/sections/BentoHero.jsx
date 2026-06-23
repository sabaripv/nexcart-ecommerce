import unleashImg from "../../assets/images/unleash.jpg";
import mobileImg from "../../assets/images/mobile.jpg";
import audioImg from "../../assets/images/audio.jpg";
import laptopImg from "../../assets/images/laptop.jpg";
import gamingImg from "../../assets/images/gaming.jpg";
import wearablesImg from "../../assets/images/wearables.jpg";

function BentoHero() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[220px_220px_180px]">

          {/* HERO */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] lg:col-span-2 lg:row-span-2">

            <img
              src={unleashImg}
              alt="Hero"
              className="absolute right-[-30px] bottom-0 h-[110%] w-auto object-contain opacity-70 transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />

            <div className="relative z-10">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
                New Collection
              </p>

              <h1 className="mb-4 text-5xl font-bold leading-tight">
                Unleash
                <br />
                Performance
              </h1>

              <p className="max-w-sm text-gray-300">
                High-performance technology built for your everyday digital life.
              </p>

              <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                Explore Now
              </button>
            </div>
          </div>

          {/* MOBILE */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]">

            <img
              src={mobileImg}
              alt="Mobile"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 p-6">
              <p className="text-sm text-blue-500">Mobile</p>
              <h3 className="mt-2 text-xl font-semibold">Flagship Devices</h3>
              <p className="mt-2 text-sm text-gray-300">
                Premium smartphones built for speed and performance.
              </p>
            </div>
          </div>

          {/* AUDIO */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]">

            <img
              src={audioImg}
              alt="Audio"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 p-6">
              <p className="text-sm text-blue-500">Audio</p>
              <h3 className="mt-2 text-xl font-semibold">Premium Sound</h3>
              <p className="mt-2 text-sm text-gray-300">
                Immersive listening experience with crystal clear audio.
              </p>
            </div>
          </div>

          {/* LAPTOP */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]">

            <img
              src={laptopImg}
              alt="Laptop"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 p-6">
              <p className="text-sm text-blue-500">Laptop</p>
              <h3 className="mt-2 text-xl font-semibold">Power & Speed</h3>
              <p className="mt-2 text-sm text-gray-300">
                Built for creators, developers and professionals.
              </p>
            </div>
          </div>

          {/* GAMING */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]">

            <img
              src={gamingImg}
              alt="Gaming"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 p-6">
              <p className="text-sm text-blue-500">Gaming</p>
              <h3 className="mt-2 text-xl font-semibold">No Limits</h3>
              <p className="mt-2 text-sm text-gray-300">
                High-performance gear for competitive gaming.
              </p>
            </div>
          </div>

          {/* WEARABLES */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]">

            <img
              src={wearablesImg}
              alt="Wearables"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 p-6">
              <p className="text-sm text-blue-500">Wearables</p>
              <h3 className="mt-2 text-xl font-semibold">Smart Lifestyle</h3>
              <p className="mt-2 text-sm text-gray-300">
                Stay connected, active and informed everywhere.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BentoHero;