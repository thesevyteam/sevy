'use client';
import { useAuth } from '@/context/AuthContext';
import Button from '@/shared/components/button';
import CapsuleIndicator from '@/shared/components/capsuleIndicator';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ServicesSection from './components/servicesSection';
import TopRatedSection from './components/topRatedSection';
const { getCurrentLocation } = require('@/api/location');

function Home() {
  const [geohash, setGeohash] = useState(null);
  const [city, setCity] = useState('');
  const { user, setUser } = useAuth();
  useEffect(() => {
    getCurLoc();
  }, []);

  async function getCurLoc() {
    const { cur_geohash, cur_city } = await getCurrentLocation();
    setGeohash(cur_geohash);
    setCity(cur_city);
    setUser({ ...user, geohash: cur_geohash, city: cur_city });
  }

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full mt-20">
      <div className="screen-padding flex w-full items-center h-50vh lg:h-75vh">
        <div className="w-full lg:w-1/2">
          <CapsuleIndicator
            className="lg:hidden flex w-fit"
            text={`${city}, GH`}
            location={true}
          />
          <div className="mt-3 lg:mt-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex cursor-default">
            <h1>
              Get it done{' '}
              <span className="text-primary tracking-wide">Right</span>
            </h1>
          </div>
          <h2 className="mt-5 text-xl tracking-wide cursor-default">
            From leaky taps to broken locks, we’ve got you covered
          </h2>
          <div className="mt-5 shadow-md rounded-md flex justify-center items-center">
            <input
              type="search"
              className="flex-1 bg-white outline-none h-10 rounded-l-md px-2 text-primary-text"
              placeholder="What services are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            <Link href={`/search?q=${searchQuery}`}>
              <Button
                icon={
                  <FiSearch
                    style={{ strokeWidth: '3', width: 18, height: 18 }}
                  />
                }
                className="rounded-l-none px-4"
                // onClick={() => {}}
              />
            </Link>
          </div>
        </div>
        {/* handyman img */}
        <div className="hidden w-1/2 h-full relative lg:flex justify-center items-center">
          <Image
            className="absolute"
            src="/assets/images/handyman.png"
            fill={true}
            style={{ objectFit: 'contain' }}
            alt="Happy repairman holds hammer and paint roller"
          />
        </div>
      </div>
      <ServicesSection />
      {geohash && <TopRatedSection cur_geohash={geohash} />}
      <div className="mt-10"></div>
    </div>
  );
}

export default Home;
