export default function HeroSection() {
  return (
    <section className="p-6">
      <div className="px-8 py-12 bg-gray-800 rounded-md md:px-20 md:flex md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Interested in our website?
          </h3>
          <p className="max-w-3xl mt-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
            velit tincidunt, congue nibh nec, tincidunt urna. Vestibulum id
            varius orci, sed volutpat sapien.
          </p>
        </div>

        <a
          className="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded md:mt-0 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110"
          href="/contact"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
