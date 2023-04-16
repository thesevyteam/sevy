'use client';

import CheckboxTile from '@/shared/components/CheckboxTile';
import { useState } from 'react';
import { RiEye2Line, RiEyeCloseLine } from 'react-icons/ri';

function BasicInformation({
  setBasicInfo,
  email,
  setEmail,
  primaryContact,
  setPrimaryContact,
}) {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassWordsDoNotMatchError, setShowPassWordDoNotMatchError] =
    useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (
      confirmPassword !== '' &&
      password.substring(0, confirmPassword.length) !== confirmPassword
    ) {
      setShowPassWordDoNotMatchError(true);
    } else {
      setShowPassWordDoNotMatchError(false);
    }
    setBasicInfo({ fname, lname, phone, password });
  };

  const setEmailPrimaryContact = () => {
    setPrimaryContact('email');
  };

  const setPhonePrimaryContact = () => {
    setPrimaryContact('phone');
  };

  return (
    <form className="space-y-4" onChange={handleChange}>
      <p className="text-lg font-bold tracking-wide">Basic Information</p>
      <div className="flex w-full gap-2">
        <div className="">
          <label className="block text-sm font-bold mb-2" htmlFor="fname">
            First Name
          </label>
          <input
            className="input__bg"
            id="fname"
            type="text"
            placeholder="Coco"
            value={fname}
            onChange={(e) => setFName(e.target.value.trim())}
            required
          />
        </div>
        <div className="">
          <label className="block text-sm font-bold mb-2" htmlFor="lname">
            Last Name
          </label>
          <input
            className="input__bg"
            id="lname"
            type="text"
            placeholder="Coleman"
            value={lname}
            onChange={(e) => setLName(e.target.value.trim())}
            required
          />
        </div>
      </div>
      <div className="">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="input__bg"
          id="email"
          type="email"
          placeholder="abc@ijk.xyz"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          required
        />
        <CheckboxTile
          className="mt-2"
          text="Use as primary contact"
          isActive={primaryContact === 'email'}
          onClick={setEmailPrimaryContact}
        />
      </div>
      <div className="">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Phone
        </label>
        <input
          className="input__bg"
          id="phone"
          type="tel"
          placeholder="+233 000 000 000"
          value={phone}
          onChange={(e) => setPhone(e.target.value.trim())}
          required
        />
        <CheckboxTile
          className="mt-2"
          text="Use as primary contact"
          isActive={primaryContact === 'phone'}
          onClick={setPhonePrimaryContact}
        />
      </div>
      <div className="">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <div className="flex w-full relative">
          <div
            className="absolute right-3 top-3 text-primary cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <RiEye2Line /> : <RiEyeCloseLine />}
          </div>
          <input
            onPaste={() => {
              return false;
            }}
            onCopy={() => {
              return false;
            }}
            className="input__bg"
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            required
          />
        </div>
      </div>
      <div className="">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          Confirm Password
        </label>
        <div className="flex w-full relative">
          <div
            className="absolute right-3 top-3 text-primary cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <RiEye2Line /> : <RiEyeCloseLine />}
          </div>
          <input
            onPaste={() => {
              return false;
            }}
            onCopy={() => {
              return false;
            }}
            className="input__bg"
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value.trim())}
            required
          />
        </div>
        <p className={`${showPassWordsDoNotMatchError ? 'error' : 'hidden'}`}>
          Passwords do not match
        </p>
      </div>
    </form>
  );
}

export default BasicInformation;
