import { allCategories } from '@/utils/categories';
import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import { RiAlarmWarningFill } from 'react-icons/ri';
import SelectField from './SelectField';
import Button from './button';

const EmergencyBooking = ({ closeModal }) => {
  const [bookingStep, setBookingStep] = useState(0);
  const [emergencyServiceCategory, setEmergencyServiceCategory] = useState('');
  const [emergencyServiceType, setEmergencyServiceType] = useState('');
  const [emergencyDescription, setEmergencyDescription] = useState('');

  const handleSubmit = () => {
    // Handle the emergency booking submission logic here
    setBookingStep(1);
  };

  const handleEmergencyCategoryChange = (selectedOption) => {
    setEmergencyServiceCategory(selectedOption);
  };
  const handleEmergencyTypeChange = (selectedOption) => {
    setEmergencyServiceType(selectedOption);
  };

  if (bookingStep === 0) {
    return (
      <div className="flex flex-col gap-4 w-screen lg:w-35vw h-screen lg:h-full lg:max-h-90vh p-2 sm:p-4 lg:p-0 hide-scrollbar">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Select Emergency Service Type
          </h2>
          <button onClick={closeModal}>
            <BsXLg style={{ width: 20, height: 20 }} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="label" htmlFor="serviceType">
              Service Category
            </label>
            <SelectField
              id="emergency_category"
              value={emergencyServiceCategory}
              onChange={handleEmergencyCategoryChange}
              options={allCategories.map((category) => ({
                value: category,
                label: category,
              }))}
              onBg={true}
            />
          </div>
          <div>
            <label className="label" htmlFor="serviceType">
              Service Type
            </label>
            <SelectField
              id="emergency_type"
              value={emergencyServiceType}
              onChange={handleEmergencyTypeChange}
              options={allCategories.map((category) => ({
                value: category,
                label: category,
              }))}
              onBg={true}
            />
          </div>
          <textarea
            placeholder="Describe your emergency"
            value={emergencyDescription}
            onChange={(e) => setEmergencyDescription(e.target.value)}
            className="input__bg px-3 py-2 resize-none h-24"
          />
          <Button
            disabled={
              emergencyServiceCategory === '' ||
              emergencyDescription === '' ||
              emergencyServiceType === ''
            }
            text={'Submit'}
            icon={<RiAlarmWarningFill style={{ width: 16, height: 16 }} />}
          />
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4 w-screen lg:w-35vw h-screen lg:h-full lg:max-h-90vh p-2 sm:p-4 lg:p-0 hide-scrollbar">
        <h2>Emergency Request Submitted</h2>
        <p>Your emergency request has been submitted.</p>
        {/* Display estimated response time, service provider details, etc. */}
      </div>
    );
  }
};

export default EmergencyBooking;
