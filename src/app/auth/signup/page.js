'use client';

import {
  registerUser,
  sendHandymanIDInfo,
  sendHandymanProfileInfo,
} from '@/api/auth';
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
  const [handymanProfileInfo, setHandymanProfileInfo] = useState({});
  const [idInfo, setIDInfo] = useState({});
  const [email, setEmail] = useState('');
  const [primaryContact, setPrimaryContact] = useState('');
  const [otpDestination, setOTPDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (primaryContact === 'email') {
      setOTPDestination(email);
    } else if (primaryContact === 'phone') {
      setOTPDestination(basicInfo.phone);
    }
  }, [primaryContact, email, basicInfo.phone]);

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

  const IDInfoComplete = () => {
    return idInfo.idFile && idInfo.ppFile && idInfo.idType && idInfo.idNum;
  };

  const profileSetupComplete = () => {
    return (
      handymanProfileInfo.yoe &&
      handymanProfileInfo.bio &&
      handymanProfileInfo.bio?.length > 20 &&
      handymanProfileInfo.availableDays &&
      handymanProfileInfo.availableDays?.length > 0 &&
      handymanProfileInfo.availableStartTime &&
      handymanProfileInfo.availableEndTime &&
      handymanProfileInfo.geohash &&
      handymanProfileInfo.city
    );
  };

  const isButtonDisabled = () => {
    if (step === 0) return accountType === '';
    else if (step === 1) return !basicInfoComplete();
    else if (step === 3) return !profileSetupComplete();
    else if (step === 4) return !IDInfoComplete();
  };

  const goTo = (pageNo) => {
    setStep(pageNo);
  };

  async function handleRegister() {
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
      setError('');
      setLoading(false);
      setStep((prevStep) => prevStep + 1);
    } catch (error) {
      setError(error.response.data.error);
      console.error('Error registering user:', error);
    }
    setLoading(false);
  }
  async function addHandymanInfo() {
    setLoading(true);
    try {
      const _profileInfo = {
        yoe: handymanProfileInfo.yoe.value,
        availableDays: handymanProfileInfo.availableDays.map(
          (day) => day.value
        ),
        available_start_time: handymanProfileInfo.availableStartTime.value,
        available_end_time: handymanProfileInfo.availableEndTime.value,
        bio: handymanProfileInfo.bio,
        geohash: handymanProfileInfo.geohash,
        city: handymanProfileInfo.city,
      };
      const response = await sendHandymanProfileInfo(_profileInfo);
      setUser(response.data);
      setError('');
      setLoading(false);
      setStep((prevStep) => prevStep + 1);
    } catch (error) {
      setError(error.response.data.error);
      console.error('Error registering user:', error);
    }
    setLoading(false);
  }

  const addIDInfo = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('id_type', idInfo.idType.value);
    formData.append('id_number', idInfo.idNum);
    formData.append('id', idInfo.idFile);
    formData.append('profile_picture', idInfo.ppFile);

    try {
      const response = await sendHandymanIDInfo(formData);
      setUser((prevUser) => ({ ...prevUser, ...response.data }));
      console.log('Upload success:', response.data);
      setError('');
      setLoading(false);
      setStep((prevStep) => prevStep + 1);
    } catch (error) {
      setError(error.response.data.error);
      console.error('Error uploading certification:', error);
    }
    setLoading(false);
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
    <ContactVerification
      key={3}
      contact={otpDestination}
      contactType={primaryContact}
      goTo={goTo}
    />,
    <ProfileSetup
      key={4}
      handyManProfileInfo={handymanProfileInfo}
      setHandymanProfileInfo={setHandymanProfileInfo}
    />,
    <IdentityVerification key={5} idInfo={idInfo} setIDInfo={setIDInfo} />,
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
        {step != 2 && !loading && (
          <>
            <Button
              text={'Back'}
              className={`${step == 1 ? 'visible' : 'invisible'}`}
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
                else if (step === 3) addHandymanInfo();
                else if (step === 4) addIDInfo();
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
