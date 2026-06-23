import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          <h1 className="text-3xl font-bold tracking-[0.2em]">
            NEX<span className="text-blue-500">CART</span>
          </h1>

          <ul className="hidden gap-8 text-sm md:flex">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">Shop</li>
            <li className="cursor-pointer hover:text-blue-500">Categories</li>
            <li className="cursor-pointer hover:text-blue-500">Deals</li>
            <li className="cursor-pointer hover:text-blue-500">Support</li>
          </ul>

          <div className="flex gap-5 text-xl">
            <FaSearch className="cursor-pointer hover:text-blue-500" />
            <FaShoppingCart className="cursor-pointer hover:text-blue-500" />
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;