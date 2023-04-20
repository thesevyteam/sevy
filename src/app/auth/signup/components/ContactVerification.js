'use client';

import { resendOTP, submitOTP } from '@/api/auth';
import { useAuth } from '@/context/AuthContext';
import CodeVerification from '@/shared/components/CodeVerification';
import Button from '@/shared/components/button';
import { useState } from 'react';
import { SlReload } from 'react-icons/sl';

function ContactVerification({ contact, contactType, goTo }) {
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleOTPVerification = async (code) => {
    try {
      const response = await submitOTP(code, user.uid);
      user.role === 'handyman' ? goTo(3) : goTo(5);
      console.log(response);
    } catch (error) {
      console.error('Error submitting OTP:', error);
      setError(error.message);
    }
  };

  const handleResendOTP = async () => {
    console.log("Resending OTP to user's " + contactType);
    try {
      const response = await resendOTP(
        user.email,
        user.phone,
        user.primary_contact,
        user.uid
      );
      console.log(response);
    } catch (error) {
      console.error('Error resetting OTP:', error);
      setError(error.message);
    }
  };

  return (
    <div className="space-y-6 flex flex-col items-center justify-center w-full">
      {error ? (
        <p className="text-center error">{error}</p>
      ) : (
        <p className="text-sm md:text-base text-center">
          We&apos;ve sent a verification code to <strong>{contact}</strong>. The
          code will expire in 10 minutes. Please input the code below.
          {contactType === 'email' &&
            "(Check spam folder if you can't find it)"}
        </p>
      )}
      <CodeVerification verify={handleOTPVerification} />
      <Button
        type="text"
        textColor="text-primary hover:text-primary-900"
        iconColor="text-primary hover:text-primary-900"
        text={'Resend'}
        icon={<SlReload style={{ width: 16, height: 16 }} />}
        onClick={handleResendOTP}
      />
    </div>
  );
}

export default ContactVerification;
