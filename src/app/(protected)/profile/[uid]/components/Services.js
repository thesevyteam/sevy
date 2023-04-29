'use client';
import AppModal from '@/shared/components/AppModal';
import Button from '@/shared/components/button';
import ProviderCard from '@/shared/components/providerCard';
import { toggleBodyScroll } from '@/utils/scroll';
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import AddService from './AddService';

// {
//       id: 8,
//       category: 'Moving',
//       provider: 'Janet Adom',
//       rating: 4.5,
//       distance: 1.2,
//       price: 23,
//       service: 'Moving and Packing',
//       img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
//     }
const PortfolioSection = ({ services }) => {
  console.log(services);
  const [addServiceModalOpen, setAddServiceModalOpen] = useState(false);
  const [closingAddServiceModal, setClosingAddServiceModal] = useState(false);

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
      {services == null || services.length === 0 ? (
        <div className="flex justify-center items-center h-32">
          No services added yet
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item, index) => (
            <ProviderCard key={index} data={item} width={'w-full'} />
          ))}
        </div>
      )}
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
