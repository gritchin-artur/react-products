import { NavButton } from "../components/NavButton";

export const HomePage = () => {
  return (
    <div className="prose max-w-none p-6 mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          Welcome to AromaBite{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Your one-stop shop for delightful flavors and luxurious scents—taste
          and beauty in perfect harmony.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
        <p>
          At AromaBite, we believe that every bite and every scent should spark
          joy. From gourmet treats to artisan fragrances and self-care
          essentials, we bring you quality and indulgence in one elegant place.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-4">
          <li>
            <strong>Premium Selection:</strong> Carefully curated items that
            meet the highest standards.
          </li>
          <li>
            <strong>Effortless Shopping:</strong> Quick browsing, easy checkout,
            and speedy delivery.
          </li>
          <li>
            <strong>Customer First:</strong> We're here to delight and support
            you at every step.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🌟 Featured Collections</h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">1. Gourmet Foods 🍫</h3>
          <img
            src="https://www.thespruceeats.com/thmb/jVtUtZRLCyhmjO-WGdPXDGySZUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-480379752-588cb5de3df78caebc869bcf.jpg"
            alt="Gourmet Snacks"
            className="w-full rounded-lg object-cover"
          />
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            <li>Handcrafted chocolates, cookies, and snacks</li>
            <li>Organic, local ingredients packed with flavor</li>
            <li>Perfect for gifting or treating yourself</li>
          </ul>
        </div>

        <div className="space-y-2 mt-8">
          <h3 className="text-xl font-semibold">2. Perfumes & Fragrances 🌸</h3>
          <img
            src="https://www.makeup.com/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2020/04_april/28-fragrance-exipre/does-perfume-expire-hero-mudc-042820.jpg"
            alt="Luxury Perfumes"
            className="w-full rounded-lg object-cover"
          />
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            <li>Elegant eau de parfums and subtle body mists</li>
            <li>Long-lasting scents for every mood and moment</li>
            <li>Unisex, feminine, and masculine blends</li>
          </ul>
        </div>

        <div className="space-y-2 mt-8">
          <h3 className="text-xl font-semibold">3. Cosmetics & Skincare 💄</h3>
          <img
            src="https://robinsonpackaging.com/wp-content/uploads/2021/02/BeautyPC.jpg"
            alt="Cosmetics and Skincare"
            className="w-full rounded-lg object-cover"
          />
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            <li>Natural skincare, nourishing creams, and makeup essentials</li>
            <li>Cruelty-free, dermatologist-approved products</li>
            <li>Beauty for every skin tone and type</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🚀 Why Shop With Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Secure Payments 🔒</strong>
            <br />
            We use Stripe for end-to-end encrypted transactions.
          </li>
          <li>
            <strong>Fast & Free Shipping 🚚</strong>
            <br />
            Free delivery on orders over $50.
          </li>
          <li>
            <strong>Hassle-Free Returns 🔄</strong>
            <br />
            Changed your mind? Send it back within 30 days.
          </li>
          <li>
            <strong>Exclusive Offers 🎁</strong>
            <br />
            Join our email list and enjoy early access to deals and drops.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          🌈 Start Your Journey in 3 Steps
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <strong>Browse Products 🛍️</strong>
            <br />
            Explore by flavor, scent, or collection.
          </li>
          <li>
            <strong>Add to Basket 🧺</strong>
            <br />
            Pick your favorites and store them in your cart.
          </li>
          <li>
            <strong>Checkout & Relax 🧘</strong>
            <br />
            We’ll handle the rest. Your happiness is on its way!
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          ⭐ What Our Customers Say
        </h2>
        <div className="space-y-4 text-gray-700">
          <blockquote className="border-l-4 border-pink-500 pl-4 italic">
            “I was blown away by the perfume selection! My new signature scent
            was here all along.”
            <span className="block mt-1 text-right font-semibold">
              — Alicia M.
            </span>
          </blockquote>
          <blockquote className="border-l-4 border-pink-500 pl-4 italic">
            “Ordered a skincare kit and some artisan snacks—arrived fast and
            beautifully packaged!”
            <span className="block mt-1 text-right font-semibold">
              — Victor S.
            </span>
          </blockquote>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          📸 Follow Us on Instagram
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src="https://www.thespruceeats.com/thmb/jVtUtZRLCyhmjO-WGdPXDGySZUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-480379752-588cb5de3df78caebc869bcf.jpg"
            alt="Luxury Chocolate Box"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://www.makeup.com/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2020/04_april/28-fragrance-exipre/does-perfume-expire-hero-mudc-042820.jpg"
            alt="Perfume Bottle Flatlay"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://robinsonpackaging.com/wp-content/uploads/2021/02/BeautyPC.jpg"
            alt="Cosmetic Product Showcase"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="text-center">
        <p className="text-lg font-medium mb-4">
          Dive into the world of flavors and fragrances. Click below to explore
          our full catalog!
        </p>
        <NavButton page="/products" text="Explore Products 🛒" color="pink" />
      </section>
    </div>
  );
};
