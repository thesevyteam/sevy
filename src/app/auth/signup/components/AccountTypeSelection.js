'use client';

import { BsTools } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';

function AccountTypeSelection({ accountType, setAccountType }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold tracking-wide">Select Account Type</p>
      <div className="flex gap-4 w-full">
        <button
          className={`border-2 border-gray-300 w-1/2 h-44 rounded-md flex flex-col gap-2 items-center justify-center ${
            accountType === 'provider' ? 'border-primary' : 'border-gray-300'
          }`}
          onClick={() => setAccountType('provider')}
        >
          <BsTools
            style={{ width: 40, height: 40 }}
            className={`${
              accountType === 'provider' ? 'text-primary' : 'text-gray-400'
            }`}
          />
          <span
            className={`${
              accountType === 'provider' ? 'text-primary' : 'text-gray-400'
            }`}
          >
            I&apos;m a Service Provider
          </span>
        </button>
        <button
          className={`border-2 border-gray-300 w-1/2 h-44 rounded-md flex flex-col gap-2 items-center justify-center ${
            accountType === 'client' ? 'border-primary' : 'border-gray-300'
          }`}
          onClick={() => setAccountType('client')}
        >
          <HiUser
            style={{ width: 40, height: 40 }}
            className={`${
              accountType === 'client' ? 'text-primary' : 'text-gray-400'
            }`}
          />
          <span
            className={`${
              accountType === 'client' ? 'text-primary' : 'text-gray-400'
            }`}
          >
            I&apos;m a Client
          </span>
        </button>
      </div>
    </div>
  );
}

export default AccountTypeSelection;
