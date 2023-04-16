import { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import Modal from 'react-modal';
import AppCalendar from './Calendar';
import SelectField from './SelectField';
import TimeSelector from './TimeSelector';
import Button from './button';
import Price from './price';

const BookingModal = ({
  isOpen,
  closeModal,
  providerName,
  closing,
  service = {
    varieties: [
      {
        name: 'Basic',
        price: 200,
      },
      {
        name: 'Premium',
        price: 300,
      },
    ],
  },
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState();
  const [serviceType, setServiceType] = useState();
  const [note, setNote] = useState('');
  const [price, setPrice] = useState(0);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 45,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      borderRadius: '0.375rem',
      animation: closing ? 'slideUp 0.3s' : 'slideDown 0.3s',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log('Booking submitted');
    closeModal();
  };

  const handleServiceTypeChange = (selectedOption) => {
    setPrice(
      service.varieties.find((variety) => variety.name === selectedOption.value)
        .price
    );
    setServiceType(selectedOption);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="flex flex-col gap-4 w-screen lg:w-35vw h-screen lg:h-full lg:max-h-90vh p-2 sm:p-4 lg:p-0 hide-scrollbar">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Book {providerName}&apos;s Service
          </h2>
          <button onClick={closeModal}>
            <BsX style={{ width: 30, height: 30 }} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AppCalendar />
          <div>
            <label className="label" htmlFor="time">
              Time
            </label>
            <TimeSelector time={selectedTime} setTime={setSelectedTime} />
          </div>
          <div>
            <label className="label" htmlFor="serviceType">
              Service Type
            </label>
            <SelectField
              id="serviceType"
              value={serviceType}
              onChange={handleServiceTypeChange}
              options={service.varieties.map((variety) => ({
                value: variety.name,
                label: variety.name,
              }))}
              onBg={true}
            />
          </div>
          <textarea
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="input__bg px-3 py-2 resize-none h-24"
          />
          <div className="flex justify-between items-center">
            <p className="">Total</p>
            <Price price={price} />
          </div>
          <Button
            icon={<GiTakeMyMoney style={{ width: 20, height: 20 }} />}
            text="Make Payment"
            // onClick={openModal}
          />
        </form>
        <div className="pb-20 lg:pb-4"></div>
      </div>
    </Modal>
  );
};

export default BookingModal;
