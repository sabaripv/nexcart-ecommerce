import laptopImg from "../../assets/images/laptop.jpg";
import mobileImg from "../../assets/images/mobile.jpg";
import gamingImg from "../../assets/images/gaming.jpg";
import audioImg from "../../assets/images/audio.jpg";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: "$1499",
      image: laptopImg,
    },
    {
      id: 2,
      name: "Flagship Phone",
      price: "$999",
      image: mobileImg,
    },
    {
      id: 3,
      name: "Gaming Controller",
      price: "$199",
      image: gamingImg,
    },
    {
      id: 4,
      name: "Wireless Audio",
      price: "$149",
      image: audioImg,
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Featured
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Best Selling Products
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {product.name}
                </h3>

                <p className="mt-2 font-medium text-blue-500">
                  {product.price}
                </p>

                <button
                  className="mt-4 w-full rounded-xl bg-blue-600 py-2 transition hover:bg-blue-700"
                  onClick={(e) => e.preventDefault()}
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;