import {
  Truck,
  Lock,
  ShieldCheck,
  Headphones,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      title: "Fast Delivery",
      description: "Get your gadgets delivered quickly and safely.",
      icon: Truck,
    },
    {
      title: "Secure Payments",
      description: "100% secure transactions with trusted payment methods.",
      icon: Lock,
    },
    {
      title: "Warranty Protection",
      description: "Official warranty coverage on all eligible products.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Support",
      description: "Our team is always ready to assist you.",
      icon: Headphones,
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Shopping Made Better
          </h2>

          <p className="mt-3 text-gray-400">
            Experience premium service with every purchase.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-[#0F172A] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;