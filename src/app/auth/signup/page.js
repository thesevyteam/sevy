'use client';

import Button from '@/shared/components/button';
import { useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import AccountTypeSelection from './components/AccountTypeSelection';
import BasicInformation from './components/BasicInformation';
import ContactVerification from './components/ContactVerification';
import IdentityVerification from './components/IdentityVerification';
import ProfileSetup from './components/ProfileSetup';

function SignUp() {
  const [step, setStep] = useState(0);
  const [accountType, setAccountType] = useState('');
  const [basicInfo, setBasicInfo] = useState({});
  const [email, setEmail] = useState('');
  const [primaryContact, setPrimaryContact] = useState('');

  const basicInfoComplete = () => {
    console.log(basicInfo);
    return (
      basicInfo.fname &&
      basicInfo.lname &&
      basicInfo.phone &&
      basicInfo.password
    );
  };

  const isButtonDisabled = () => {
    if (step === 0) return accountType === '' ? true : false;
    if (step === 1) return !basicInfoComplete();
  };

  const components = [
    <AccountTypeSelection
      key={1}
      accountType={accountType}
      setAccountType={setAccountType}
    />,
    <BasicInformation
      key={2}
      setBasicInfo={setBasicInfo}
      email={email}
      setEmail={setEmail}
      primaryContact={primaryContact}
      setPrimaryContact={setPrimaryContact}
    />,
    <ContactVerification key={3} contact={email} />,
    <ProfileSetup key={5} />,
    <IdentityVerification key={4} />,
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white lg:bg-transparent py-5">
      <div className="w-full max-w-md p-2 md:p-4 bg-white lg:rounded-md lg:shadow-md">
        {components[step]}
      </div>
      <div className="w-full max-w-md flex justify-between items-center mt-4">
        <Button
          text={'Back'}
          className={`${step > 0 ? 'visible' : 'invisible'}`}
          icon={<IoIosArrowRoundBack style={{ width: 20, height: 20 }} />}
          onClick={() => setStep((prevStep) => prevStep - 1)}
          shrink={true}
          roundOnShrink={true}
        />
        <Button
          disabled={isButtonDisabled()}
          text={'Continue'}
          className={`${
            step < components.length - 1 ? 'visible' : 'invisible'
          }`}
          icon={<IoIosArrowRoundForward style={{ width: 20, height: 20 }} />}
          iconPlacement="right"
          onClick={() => setStep((prevStep) => prevStep + 1)}
          shrink={true}
          roundOnShrink={true}
        />
      </div>
    </div>
  );
}

export default SignUp;
