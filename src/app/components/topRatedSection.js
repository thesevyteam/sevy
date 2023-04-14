import ProviderCard from '@/shared/components/providerCard';
import '../globals.css';

const data = [
  {
    id: 1,
    category: 'Pool',
    provider: 'Yaa Asantewaa',
    rating: 4.8,
    distance: 1.2,
    price: 57.65,
    service: 'Pool Cleaning',
    img: 'https://images.unsplash.com/photo-1509577330292-0532d33c053e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vbCUyMGNsZWFuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 2,
    category: 'Electrical',
    provider: 'Kwaku Asante',
    rating: 4.7,
    distance: 0.8,
    price: 64.99,
    service: 'Electrical Installations',
    img: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNhbCUyMGluc3RhbGxhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 3,
    category: 'Plumbing',
    provider: 'Prince Beqoe',
    rating: 4.6,
    distance: 1.2,
    price: '100.00',
    service: 'Taps, Sinks, and Toilets Installation and Fixing',
    img: 'https://plus.unsplash.com/premium_photo-1661962372055-1ef334c33f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 4,
    category: 'Moving',
    provider: 'Janet Adom',
    rating: 4.5,
    distance: 1.2,
    price: '123.00',
    service: 'Moving and Packing',
    img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 5,
    category: 'Pool',
    provider: 'Yaa Asantewaa',
    rating: 4.8,
    distance: 1.2,
    price: 57.65,
    service: 'Pool Cleaning',
    img: 'https://images.unsplash.com/photo-1509577330292-0532d33c053e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vbCUyMGNsZWFuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 6,
    category: 'Electrical',
    provider: 'Kwaku Asante',
    rating: 4.7,
    distance: 0.8,
    price: 64.99,
    service: 'Electrical Installations',
    img: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNhbCUyMGluc3RhbGxhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 7,
    category: 'Plumbing',
    provider: 'Prince Beqoe',
    rating: 4.6,
    distance: 1.2,
    price: '100.00',
    service: 'Taps, Sinks, and Toilets Installation and Fixing',
    img: 'https://plus.unsplash.com/premium_photo-1661962372055-1ef334c33f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 8,
    category: 'Moving',
    provider: 'Janet Adom',
    rating: 4.5,
    distance: 1.2,
    price: '123.00',
    service: 'Moving and Packing',
    img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
];

function TopRatedSection() {
  return (
    <div className="w-full">
      <h3 className="screen-padding-l text-xl font-semibold mt-10 mb-4">
        Top Rated
      </h3>
      <div className="w-full overflow-x-auto hide-scrollbar">
        <div className="screen-padding flex gap-4 min-w-min pb-10 whitespace-nowrap">
          {data.map((item) => (
            <ProviderCard
              category={item.category}
              key={item.id}
              provider={item.provider}
              rating={item.rating}
              distance={item.distance}
              price={item.price}
              service={item.service}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRatedSection;
