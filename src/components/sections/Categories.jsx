import mobileImg from "../../assets/images/mobile.jpg";
import laptopImg from "../../assets/images/laptop.jpg";
import gamingImg from "../../assets/images/gaming.jpg";
import audioImg from "../../assets/images/audio.jpg";
import wearablesImg from "../../assets/images/wearables.jpg";

function Categories() {
  const categories = [
    { name: "Mobile", image: mobileImg },
    { name: "Laptop", image: laptopImg },
    { name: "Gaming", image: gamingImg },
    { name: "Audio", image: audioImg },
    { name: "Wearables", image: wearablesImg },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Categories
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Shop By Category
          </h2>

          <p className="mt-3 text-gray-400">
            Discover premium gadgets tailored to your lifestyle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
            >

              <img
                src={category.image}
                alt={category.name}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-xl font-semibold">
                  {category.name}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;