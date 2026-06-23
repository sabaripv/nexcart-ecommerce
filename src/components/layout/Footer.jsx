function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020817]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-white">NEX</span>
              <span className="text-blue-500">CART</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Premium gadgets and technology products for modern lifestyles.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Shop</h3>

            <ul className="space-y-3">
              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Mobile
              </li>

              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Laptop
              </li>

              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Gaming
              </li>

              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Audio
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>

            <ul className="space-y-3">
              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                About
              </li>

              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Careers
              </li>

              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Contact
              </li>

              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Support
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Legal</h3>

            <ul className="space-y-3">
              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Privacy Policy
              </li>

              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Terms of Service
              </li>

              <li className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-500">
                Refund Policy
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2026 NexCart. All rights reserved.</p>

          <p>
            Built with{" "}
            <span className="text-blue-500">
              React + Tailwind CSS
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;