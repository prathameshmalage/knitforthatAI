function App() {
  const featuredSweaters = [
    {
      name: "The Fireside",
      price: 89,
      description: "Chunky cable-knit in merino wool. Your couch's best friend.",
      color: "Oatmeal",
    },
    {
      name: "The Wanderer",
      price: 95,
      description: "Lightweight fair isle for crisp autumn walks.",
      color: "Forest Green",
    },
    {
      name: "The Hygge",
      price: 110,
      description: "Oversized turtleneck. Pure cashmere, pure bliss.",
      color: "Charcoal",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight">KnitForThat</h1>
        <div className="flex gap-8 text-sm font-medium text-stone-600">
          <a href="#shop" className="hover:text-stone-900 transition-colors">Shop</a>
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          <a href="#instagram" className="hover:text-stone-900 transition-colors">Instagram</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597736091383-2976f665d932?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-stone-900/60 px-8 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-stone-300 mb-4">
            Handcrafted with care
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-stone-50">
            Sweaters worth<br />staying in for.
          </h2>
          <p className="text-lg text-stone-300 max-w-xl mx-auto mb-10">
            Small-batch knits made from premium natural fibers. Designed to be worn,
            loved, and passed down.
          </p>
          <a
            href="#shop"
            className="inline-block bg-stone-50 text-stone-800 px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            Shop the Collection
          </a>
        </div>
      </section>

      {/* Featured */}
      <section id="shop" className="max-w-6xl mx-auto px-8 py-16">
        <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-10">
          Featured Knits
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredSweaters.map((sweater) => (
            <div
              key={sweater.name}
              className="bg-stone-200/50 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] hover:bg-stone-200 transition-colors"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-400">
                  {sweater.color}
                </span>
                <h4 className="text-2xl font-semibold mt-2 mb-3">{sweater.name}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {sweater.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-xl font-semibold">${sweater.price}</span>
                <button className="bg-stone-800 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-24">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold mb-6">Why KnitForThat?</h3>
          <p className="text-stone-500 leading-relaxed mb-4">
            We believe a sweater should last longer than a season. Every piece is
            knitted in small batches using ethically sourced wool, alpaca, and
            cashmere from family farms.
          </p>
          <p className="text-stone-500 leading-relaxed">
            No fast fashion. No synthetic blends. Just honest knits that get softer
            with every wear.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-stone-200 mt-16">
        <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-400">
            &copy; 2026 KnitForThat. All rights reserved.
          </p>
          <p className="text-sm text-stone-400">
            hello@knitforthat.com
          </p>
        </div>
      </footer>
      <footer id="instagram" className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-center">
          <a
            href="https://www.instagram.com/knitforthat"
            className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
          >
            Follow us on Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
