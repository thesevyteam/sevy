'use client';

import CodeVerification from '@/shared/components/CodeVerification';
import Button from '@/shared/components/button';
import { SlReload } from 'react-icons/sl';

function EmailVerification({ contact, contactType }) {
  return (
    <div className="space-y-6 flex flex-col items-center justify-center">
      <p className="">
        We&apos;ve sent a verification code to <strong>{contact}</strong>.
        Please input the code below.
      </p>
      <CodeVerification />
      <Button
        type="text"
        textColor="text-primary hover:text-primary-900"
        iconColor="text-primary hover:text-primary-900"
        text={'Resend'}
        icon={<SlReload style={{ width: 16, height: 16 }} />}
        shrink={true}
        roundOnShrink={true}
      />
    </div>
  );
}

export default EmailVerification;
