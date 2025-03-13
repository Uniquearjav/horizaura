import Image from 'next/image';
import Link from 'next/link';

// You can move these components to separate files as your project grows
const HeroSection = () => (
  <section className="relative h-[80vh] bg-gradient-to-r from-purple-600 to-blue-600 text-white">
    <div className="absolute inset-0 overflow-hidden">
      <Image 
        src="https://images.unsplash.com/photo-1634712282287-14ed57b91743?auto=format&fit=crop&q=80" 
        alt="Luxury Home Interior"
        fill 
        className="object-cover opacity-30"
        priority
      />
    </div>
    <div className="container mx-auto px-4 h-full flex flex-col justify-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Elevate Your Space, Enhance Your Life</h1>
        <p className="text-xl md:text-2xl mb-8">Discover timeless furniture pieces that transform your home. Free shipping on orders over $100</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products" className="px-8 py-4 bg-white text-purple-700 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
            Shop Collection
          </Link>
          <Link href="/collections/new-arrivals" className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
            New Arrivals
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            id: 1,
            name: "Modern Lounge Chair",
            desc: "Ergonomic design with premium materials",
            img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80",
            price: 149.99
          },
          {
            id: 2,
            name: "Minimalist Coffee Table",
            desc: "Scandinavian-inspired craftsmanship",
            img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80",
            price: 299.99
          },
          {
            id: 3,
            name: "Artisan Floor Lamp",
            desc: "Hand-crafted with sustainable materials",
            img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80",
            price: 89.99
          },
          {
            id: 4,
            name: "Sculptural Accent Chair",
            desc: "Statement piece for modern interiors",
            img: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?auto=format&fit=crop&q=80",
            price: 199.99
          }
        ].map((product) => (
          <Link href={`/products/product-${product.id}`} key={product.id} className="group">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative mb-4">
              <Image 
                src={product.img} 
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 right-4">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                  ${product.price}
                </span>
              </div>
            </div>
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.desc}</p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/products" className="px-8 py-4 bg-black text-white rounded-full font-medium inline-block hover:bg-gray-800 transition-colors">
          View All Products
        </Link>
      </div>
    </div>
  </section>
);

const CategoryShowcase = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Living Room', img: 'https://images.unsplash.com/photo-1588471980726-8346cb477a33?auto=format&fit=crop&q=80' },
          { name: 'Bedroom', img: 'https://images.unsplash.com/photo-1617325710235-73aaae3e3058?auto=format&fit=crop&q=80' },
          { name: 'Dining', img: 'https://images.unsplash.com/photo-1595514535215-95cf0001fa65?auto=format&fit=crop&q=80' }
        ].map((category) => (
          <Link href={`/categories/${category.name.toLowerCase().replace(' ', '-')}`} key={category.name} className="relative h-80 group overflow-hidden rounded-xl">
            <Image 
              src={category.img}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-end p-8">
              <h3 className="text-white text-2xl font-medium">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const SpecialOffer = () => (
  <section className="py-16 bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">The Artisan Collection</h2>
          <p className="text-xl mb-6 text-gray-300">Handcrafted furniture pieces made by master artisans. Use code ARTISAN25 for 25% off</p>
          <Link href="/collections/artisan" className="px-8 py-4 bg-white text-black rounded-full font-medium inline-block hover:bg-gray-100 transition-colors">
            Explore Collection
          </Link>
        </div>
        <div className="md:w-1/2 relative h-80 md:h-96">
          <Image 
            src="https://images.unsplash.com/photo-1551105378-78e609e1d468?auto=format&fit=crop&q=80" 
            alt="Artisan Furniture Collection" 
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {name: "Alex Johnson", text: "The craftsmanship of my new dining set exceeded my expectations. Each piece feels like it will last generations."},
          {name: "Maria Garcia", text: "Fast shipping and white-glove delivery service. The quality of my sofa is outstanding and exactly as pictured."},
          {name: "Samantha Lee", text: "I appreciate their sustainable practices and ethically sourced materials. My bedroom set is beautiful and I sleep better knowing it's eco-friendly."}
        ].map((testimonial, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 relative overflow-hidden">
                <Image 
                  src={`https://i.pravatar.cc/150?img=${i + 20}`} 
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium">{testimonial.name}</h3>
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Design Community</h2>
      <p className="text-gray-600 mb-8">Subscribe for exclusive offers, interior design tips, and first access to new collections.</p>
      <form className="flex flex-col sm:flex-row gap-4">
        <input 
          type="email" 
          placeholder="Your email address" 
          className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />
        <button 
          type="submit" 
          className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

// NEW SECTION: Design Inspiration
const DesignInspiration = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Design Inspiration</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Browse our curated design ideas to transform any space in your home.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Scandinavian Simplicity",
            img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80"
          },
          {
            title: "Mid-Century Modern",
            img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80"
          },
          {
            title: "Contemporary Elegance",
            img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80"
          }
        ].map((design, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <Image 
                src={design.img}
                alt={design.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-medium">{design.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Link href="/inspiration" className="text-purple-600 font-medium hover:underline">
          View All Design Ideas →
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
      <DesignInspiration />
      <SpecialOffer />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
