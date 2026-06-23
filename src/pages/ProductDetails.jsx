import { useParams } from "react-router-dom";

import laptopImg from "../assets/images/laptop.jpg";
import mobileImg from "../assets/images/mobile.jpg";
import gamingImg from "../assets/images/gaming.jpg";
import audioImg from "../assets/images/audio.jpg";

function ProductDetails() {
  const { id } = useParams();

  const products = {
    1: {
      name: "Gaming Laptop",
      price: "$1499",
      image: laptopImg,
      category: "Laptop",
      description:
        "Powerful gaming laptop with high-end graphics and ultra-fast performance.",
      features: [
        "Intel Core i9 Processor",
        "32GB RAM",
        "RTX Graphics",
        "1TB SSD Storage",
      ],
    },

    2: {
      name: "Flagship Phone",
      price: "$999",
      image: mobileImg,
      category: "Mobile",
      description:
        "Premium smartphone with a stunning display and flagship camera.",
      features: [
        "6.8 AMOLED Display",
        "120Hz Refresh Rate",
        "256GB Storage",
        "Fast Charging",
      ],
    },

    3: {
      name: "Gaming Controller",
      price: "$199",
      image: gamingImg,
      category: "Gaming",
      description:
        "Immersive gaming headset designed for competitive gameplay.",
      features: [
        "7.1 Surround Sound",
        "Noise Cancellation",
        "RGB Lighting",
        "Comfort Ear Cushions",
      ],
    },

    4: {
      name: "Wireless Audio",
      price: "$149",
      image: audioImg,
      category: "Audio",
      description:
        "Crystal-clear wireless audio experience with deep bass.",
      features: [
        "Bluetooth 5.3",
        "30-Hour Battery",
        "Deep Bass",
        "Fast Charging",
      ],
    },
  };

  const product = products[id];

  return (
    <section className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-blue-500">{product.category}</p>

            <h1 className="mt-3 text-4xl font-bold">
              {product.name}
            </h1>

            <p className="mt-4 text-3xl font-bold text-blue-500">
              {product.price}
            </p>

            <p className="mt-6 text-gray-400">
              {product.description}
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              {product.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700">
                Add to Cart
              </button>

              <button className="rounded-xl border border-white/10 px-8 py-3">
                Buy Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetails;