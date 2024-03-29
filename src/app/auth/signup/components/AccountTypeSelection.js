'use customer';

import { BsTools } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';

function AccountTypeSelection({ accountType, setAccountType }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold tracking-wide">Select Account Type</p>
      <div className="flex gap-4 w-full">
        <button
          className={`border-2 border-gray-300 w-1/2 h-44 rounded-md flex flex-col gap-3 items-center justify-center p-2 ${
            accountType === 'handyman' ? 'border-primary' : 'border-gray-300'
          }`}
          onClick={() => setAccountType('handyman')}
        >
          <BsTools
            style={{ width: 32, height: 32 }}
            className={`${
              accountType === 'handyman' ? 'text-primary' : 'text-gray-400'
            }`}
          />
          <span
            className={`my-1 text-sm lg:text-base ${
              accountType === 'handyman' ? 'text-primary' : 'text-gray-400'
            }`}
          >
            I&apos;m a Service Provider
          </span>
        </button>
        <button
          className={`border-2 border-gray-300 w-1/2 h-44 rounded-md flex flex-col gap-3 items-center justify-center ${
            accountType === 'customer' ? 'border-primary' : 'border-gray-300'
          }`}
          onClick={() => setAccountType('customer')}
        >
          <HiUser
            style={{ width: 32, height: 32 }}
            className={`${
              accountType === 'customer' ? 'text-primary' : 'text-gray-400'
            }`}
          />
          <span
            className={`my-1 text-sm lg:text-base ${
              accountType === 'customer' ? 'text-primary' : 'text-gray-400'
            }`}
          >
            I&apos;m a Customer
          </span>
        </button>
      </div>
    </div>
  );
}

export default AccountTypeSelection;
