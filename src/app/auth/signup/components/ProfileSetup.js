'use client';

import { getCurrentLocation } from '@/api/location';
import SelectField from '@/shared/components/SelectField';
import Button from '@/shared/components/button';
import { useEffect, useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';

function ProfileSetup({ handymanProfileInfo, setHandymanProfileInfo }) {
  const [yoe, setYoe] = useState();
  const [bio, setBio] = useState('');
  const [availableDays, setAvailableDays] = useState([]);
  const [availableStartTime, setAvailableStartTime] = useState([]);
  const [availableEndTime, setAvailableEndTime] = useState([]);
  const [geohash, setGeohash] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    setHandymanProfileInfo({
      yoe,
      bio,
      availableDays,
      availableStartTime,
      availableEndTime,
      geohash,
      city,
    });
  }, [
    yoe,
    bio,
    availableDays,
    availableStartTime,
    availableEndTime,
    geohash,
    city,
  ]);

  const addAvailableDay = (day) => {
    setAvailableDays(day);
  };
  const addAvailableStartTime = (time) => {
    setAvailableStartTime(time);
  };
  const addAvailableEndTime = (time) => {
    setAvailableEndTime(time);
  };

  const handleYoeChange = (_yoe) => {
    setYoe(_yoe);
  };

  const _times = [
    { value: 0, label: '12:00 AM' },
    { value: 1, label: '1:00 AM' },
    { value: 2, label: '2:00 AM' },
    { value: 3, label: '3:00 AM' },
    { value: 4, label: '4:00 AM' },
    { value: 5, label: '5:00 AM' },
    { value: 6, label: '6:00 AM' },
    { value: 7, label: '7:00 AM' },
    { value: 8, label: '8:00 AM' },
    { value: 9, label: '9:00 AM' },
    { value: 10, label: '10:00 AM' },
    { value: 11, label: '11:00 AM' },
    { value: 12, label: '12:00 PM' },
    { value: 13, label: '1:00 PM' },
    { value: 14, label: '2:00 PM' },
    { value: 15, label: '3:00 PM' },
    { value: 16, label: '4:00 PM' },
    { value: 17, label: '5:00 PM' },
    { value: 18, label: '6:00 PM' },
    { value: 19, label: '7:00 PM' },
    { value: 20, label: '8:00 PM' },
    { value: 21, label: '9:00 PM' },
    { value: 22, label: '10:00 PM' },
    { value: 23, label: '11:00 PM' },
  ];

  const getCurLoc = async () => {
    const { cur_geohash, cur_city } = await getCurrentLocation();
    setGeohash(cur_geohash);
    setCity(cur_city);
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-bold tracking-wide">Set Up Your Profile</p>
      <div>
        <label htmlFor="yoe" className="label">
          Years of Eperience
        </label>
        <SelectField
          id="yoe"
          value={yoe}
          onChange={handleYoeChange}
          onBg={true}
          options={[
            { value: '0', label: '0' },
            { value: '1 - 3', label: '1 - 3' },
            { value: '3 - 5', label: '3 - 5' },
            { value: '5 - 10', label: '5 - 10' },
            { value: '10+', label: '10+' },
          ]}
        />
      </div>
      <div>
        <label htmlFor="availability" className="label">
          Select Available Days
        </label>
        <SelectField
          id="availability"
          value={availableDays}
          onBg={true}
          isMulti={true}
          options={[
            { value: 'Sunday', label: 'Sunday' },
            { value: 'Monday', label: 'Monday' },
            { value: 'Tuesday', label: 'Tuesday' },
            { value: 'Wednesday', label: 'Wednesday' },
            { value: 'Thursday', label: 'Thursday' },
            { value: 'Friday', label: 'Friday' },
            { value: 'Saturday', label: 'Saturday' },
          ]}
          onChange={addAvailableDay}
        />
      </div>
      <div>
        <label htmlFor="available_start_time" className="label">
          Start Time
        </label>
        <SelectField
          id="available_start_time"
          value={availableStartTime}
          onChange={addAvailableStartTime}
          onBg={true}
          options={_times}
        />
      </div>
      <div>
        <label htmlFor="available_end_time" className="label">
          End Time
        </label>
        <SelectField
          id="available_end_time"
          value={availableEndTime}
          onChange={addAvailableEndTime}
          onBg={true}
          options={_times}
        />
      </div>
      <div>
        <label htmlFor="bio" className="label">
          Brief Bio
        </label>
        <textarea
          id="bio"
          placeholder="Write a brief bio about yourself"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="input__bg px-3 py-2 resize-none h-24 hide-scrollbar"
        />
        <p className="text-xs text-gray-500">minimun: 20 words</p>
      </div>
      <div className="w-full">
        <label htmlFor="service_location mb-2" className="label">
          Service Location
        </label>
        <p className="text text-gray-500 font-bold mb-3">{city || '...'}</p>
        <Button
          className={'w-full'}
          text={'Use Current Location'}
          icon={<BiCurrentLocation style={{ width: 16, height: 16 }} />}
          onClick={getCurLoc}
        />
        <p className="text-xs text-gray-500 font-thin mt-0.5">
          turn on location for better results
        </p>
      </div>
    </div>
  );
}

export default ProfileSetup;
