'use client';

import { registerUser } from '@/api/auth';
import { useAuth } from '@/context/AuthContext';
import LoadingIndicator from '@/shared/components/LoadingIndicator';
import Button from '@/shared/components/button';
import Logo from '@/shared/components/logo';
import { useEffect, useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import AccountTypeSelection from './components/AccountTypeSelection';
import AllSetUp from './components/AllSetUp';
import BasicInformation from './components/BasicInformation';
import ContactVerification from './components/ContactVerification';
import IdentityVerification from './components/IdentityVerification';
import ProfileSetup from './components/ProfileSetup';

function SignUp() {
  const [step, setStep] = useState(0);
  const { user, setUser } = useAuth();
  const [accountType, setAccountType] = useState('');
  const [basicInfo, setBasicInfo] = useState({});
  const [email, setEmail] = useState('');
  const [primaryContact, setPrimaryContact] = useState('');
  const [otpDestination, setOTPDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log(primaryContact);
    if (primaryContact === 'email') {
      setOTPDestination(email);
    } else if (primaryContact === 'phone') {
      setOTPDestination(basicInfo.phone);
    }
  }, [primaryContact, email, basicInfo.phone]);

  useEffect(() => {
    if (accountType === 'handyman') {
      components.push();
    } else if (accountType === 'customer' && components.length === 3) {
      components.pop();
      components.pop();
    }
  }, [accountType]);

  const basicInfoComplete = () => {
    return (
      basicInfo.fname &&
      basicInfo.lname &&
      basicInfo.phone &&
      basicInfo.password &&
      basicInfo.password.length >= 8 &&
      basicInfo.password === basicInfo.confirmPassword
    );
  };

  const isButtonDisabled = () => {
    if (step === 0) return accountType === '';
    else if (step === 1) return !basicInfoComplete();
  };

  const goTo = (pageNo) => {
    setStep(pageNo);
  };

  async function handleRegister() {
    console.log('Registering user...');
    setLoading(true);
    const userData = {
      first_name: basicInfo.fname,
      last_name: basicInfo.lname,
      email: email,
      phone: basicInfo.phone,
      password: basicInfo.password,
      role: accountType,
      status: 'active',
      primary_contact: primaryContact,
    };

    try {
      const response = await registerUser(userData);
      setUser(response.data);
      console.log('User registered:', response);
      setError('');
      setLoading(false);
      setStep((prevStep) => prevStep + 1);
    } catch (error) {
      setError(error.message);
      console.error('Error registering user:', error);
    }
    setLoading(false);
  }

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
    <ContactVerification
      key={3}
      contact={otpDestination}
      contactType={primaryContact}
      goTo={goTo}
    />,
    <ProfileSetup key={4} />,
    <IdentityVerification key={5} />,
    <AllSetUp key={6} />,
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white lg:bg-transparent py-5">
      <Logo href={'#'} className={'justify-center mb-4'} />
      <div className="w-full max-w-md p-2 md:p-4 bg-white lg:rounded-md lg:shadow-md">
        {loading ? (
          <div className="flex flex-col items-center justify-center w-full h-32">
            <LoadingIndicator />
          </div>
        ) : (
          <>
            {error && <p className="error mb-3">{error}</p>}
            {components[step]}
          </>
        )}
      </div>
      <div className="p-2 md:p-4 lg:p-0 w-full max-w-md flex justify-between items-center mt-4">
        {step !== 2 && !loading && (
          <>
            <Button
              text={'Back'}
              className={`${step > 0 ? 'visible' : 'invisible'}`}
              icon={<IoIosArrowRoundBack style={{ width: 16, height: 16 }} />}
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
              icon={
                <IoIosArrowRoundForward style={{ width: 16, height: 16 }} />
              }
              iconPlacement="right"
              onClick={() => {
                if (step === 1) handleRegister();
                else setStep((prevStep) => prevStep + 1);
              }}
              shrink={true}
              roundOnShrink={true}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default SignUp;
