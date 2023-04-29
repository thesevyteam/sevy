'use client';
import { useAuth } from '@/context/AuthContext';
import AppModal from '@/shared/components/AppModal';
import Booking from '@/shared/components/Booking';
import Button from '@/shared/components/button';
import CapsuleIndicator from '@/shared/components/capsuleIndicator';
import Price from '@/shared/components/price';
import Rating from '@/shared/components/rating';
import { toggleBodyScroll } from '@/utils/scroll';
import { useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { MdHandshake } from 'react-icons/md';

function ServiceInfo({
  serviceInfo: {
    id,
    category,
    provider_uid,
    name,
    duration,
    description,
    price,
    images,
    first_name,
    last_name,
    rating,
    city,
    geohash4,
    geohash5,
    geohash6,
  },
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [closingModal, setClosingModal] = useState(false);
  const { user } = useAuth();
  const owner = user?.uid === provider_uid;

  const openModal = () => {
    setIsModalOpen(true);
    toggleBodyScroll(true);
  };

  const closeModal = () => {
    setClosingModal(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setClosingModal(false);
      toggleBodyScroll(false);
    }, 290);
  };

  return (
    <div className="w-full bg-white lg:rounded-md lg:shadow-md flex flex-col px-2 py-2  sm:px-6 lg:px-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
          <div className="cursor-pointer">
            <BsBookmark
              className="text-primary hover:scale-110 hover:text-primary-900 active:scale-95 transition-all duration-200"
              style={{ width: 24, height: 24 }}
            />
          </div>
          {owner ? (
            <div></div>
          ) : (
            <Button
              icon={<MdHandshake style={{ width: 20, height: 20 }} />}
              text="Book"
              onClick={openModal}
            />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <CapsuleIndicator text={category} className="mb-2" />
        <Rating rating={rating ?? 0} className="flex lg:hidden" />
      </div>
      <Price price={price} startingPrice={true} />
      <div className="flex items-center justify-between">
        <h3 className="text-primary">{`${first_name} ${last_name}`}</h3>
        <CapsuleIndicator
          location={true}
          text={city}
          padding={false}
          bg={false}
        />
      </div>
      <div>
        <p className="text-sm text-gray-500 mt-4">{description}</p>
      </div>
      <AppModal
        isOpen={isModalOpen}
        closing={closingModal}
        closeModal={closeModal}
      >
        <Booking
          providerName={`${first_name} ${last_name}`}
          closeModal={closeModal}
        />
      </AppModal>
    </div>
  );
}

export default ServiceInfo;
