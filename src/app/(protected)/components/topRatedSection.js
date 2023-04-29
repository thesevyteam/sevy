import { getTopServices } from '@/api/services';
import ProviderCard from '@/shared/components/providerCard';
import { useEffect, useState } from 'react';

function TopRatedSection({ cur_geohash }) {
  const [data, setData] = useState([]);
  console.log(cur_geohash);
  // const { user } = useAuth();

  useEffect(() => {
    _getTopServices();
  }, []);

  async function _getTopServices() {
    try {
      const { data } = await getTopServices(cur_geohash);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    data.length > 0 && (
      <div className="w-full">
        <h3 className="screen-padding-l text-xl font-semibold mt-10 mb-4">
          Top Rated
        </h3>
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="screen-padding flex gap-4 min-w-min pb-10 whitespace-nowrap">
            {data.map((item) => (
              <ProviderCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default TopRatedSection;
