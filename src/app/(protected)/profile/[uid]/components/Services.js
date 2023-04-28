'use client';
import AppModal from '@/shared/components/AppModal';
import Button from '@/shared/components/button';
import ProviderCard from '@/shared/components/providerCard';
import { toggleBodyScroll } from '@/utils/scroll';
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import AddService from './AddService';

const PortfolioSection = () => {
  const [addServiceModalOpen, setAddServiceModalOpen] = useState(false);
  const [closingAddServiceModal, setClosingAddServiceModal] = useState(false);
  const [services, setServices] = useState([
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

  const closeAddServiceModal = () => {
    setClosingAddServiceModal(true);
    setTimeout(() => {
      setAddServiceModalOpen(false);
      setClosingAddServiceModal(false);
      toggleBodyScroll(false);
    }, 290);
  };

  const openAddServiceModal = () => {
    setAddServiceModalOpen(true);
    toggleBodyScroll(true);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Services</h3>
        <Button
          text="Add Service"
          icon={<RiAddFill style={{ width: 18, height: 18 }} />}
          roundOnShrink={true}
          shrink={true}
          onClick={openAddServiceModal}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((item, index) => (
          <ProviderCard
            key={index}
            data={{ ...item, owner: true }}
            width={'w-full'}
          />
        ))}
      </div>
      <AppModal
        isOpen={addServiceModalOpen}
        closing={closingAddServiceModal}
        closeModal={closeAddServiceModal}
        shouldCloseOnOverlayClick={false}
      >
        <AddService closeModal={closeAddServiceModal} />
      </AppModal>
    </>
  );
};

export default PortfolioSection;
