'use client';
import SelectField from '@/shared/components/SelectField';
import ProviderCard from '@/shared/components/providerCard';
import { allCategories } from '@/utils/categories';
import debounce from 'lodash.debounce';
import { useState } from 'react';

export default function Bookmarks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState([
    {
      id: 1,
      category: 'Pool',
      provider: 'Yaa Asantewaa',
      rating: 4.8,
      distance: 1.2,
      price: 57.65,
      service: 'Pool Cleaning',
      img: 'https://images.unsplash.com/photo-1509577330292-0532d33c053e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vbCUyMGNsZWFuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',

      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
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

      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
    },
    {
      id: 3,
      category: 'Plumbing',
      provider: 'Prince Beqoe',
      rating: 4.6,
      distance: 1.2,
      price: 100,
      service: 'Taps, Sinks, and Toilets Installation and Fixing',
      img: 'https://plus.unsplash.com/premium_photo-1661962372055-1ef334c33f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
    },
    {
      id: 4,
      category: 'Moving',
      provider: 'Janet Adom',
      rating: 4.5,
      distance: 1.2,
      price: 123,
      service: 'Moving and Packing',
      img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
    },
    {
      id: 7,
      category: 'Plumbing',
      provider: 'Prince Beqoe',
      rating: 4.6,
      distance: 1.2,
      price: 1,
      service: 'Taps, Sinks, and Toilets Installation and Fixing',
      img: 'https://plus.unsplash.com/premium_photo-1661962372055-1ef334c33f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
    },
    {
      id: 8,
      category: 'Moving',
      provider: 'Janet Adom',
      rating: 4.5,
      distance: 1.2,
      price: 23,
      service: 'Moving and Packing',
      img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
    },
  ]);

  // Fetch data from your API based on the search query and filters
  const fetchData = async () => {
    // Replace with your API call
    const data = await fetch(
      `/api/search?query=${searchQuery}&filters=${JSON.stringify(filters)}`
    );
    const results = await data.json();
    setResults(results);
  };

  // Debounce the fetchData function to avoid excessive API calls
  const debouncedFetchData = debounce(fetchData, 300);

  // useEffect(() => {
  //   if (searchQuery || Object.keys(filters).length > 0) {
  //     debouncedFetchData();
  //   } else {
  //     setResults([]);
  //   }
  // }, [searchQuery, filters]);

  const handlePriceChange = (selectedOption) => {
    setFilters({ ...filters, price: selectedOption });
  };
  const handleRatingChange = (selectedOption) => {
    setFilters({ ...filters, rating: selectedOption });
  };

  return (
    <div className="min-h-screen my-20">
      <div className="container screen-padding">
        <div className="flex flex-wrap relative">
          <div className="w-full lg:w-1/4">
            <div className="mb-4">
              <label htmlFor="rating" className="label">
                Category
              </label>
              <SelectField
                id="category"
                value={filters.rating}
                onChange={handleRatingChange}
                options={allCategories.map((category) => ({
                  value: category,
                  label: category,
                }))}
              />
            </div>
          </div>

          {/* Search results */}
          <div className="w-full lg:w-3/4 lg:pl-8">
            <div className="flex flex-col gap-4">
              {results.map((result) => (
                <ProviderCard key={result.id} type="wide" data={result} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
