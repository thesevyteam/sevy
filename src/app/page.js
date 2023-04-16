'use client';
import Button from '@/shared/components/button';
import CapsuleIndicator from '@/shared/components/capsuleIndicator';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ServicesSection from './components/servicesSection';
import TopRatedSection from './components/topRatedSection';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full mt-20">
      <div className="screen-padding flex w-full items-center h-50vh lg:h-75vh">
        <div className="w-full lg:w-1/2">
          <CapsuleIndicator
            className="lg:hidden flex w-fit"
            text="Cape Coast, GH"
            location={true}
          />
          <div className="text-7xl font-bold flex cursor-default">
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
      <TopRatedSection />
    </div>
  );
}

export default Home;
