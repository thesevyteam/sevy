'use client';
import { useEffect, useRef, useState } from 'react';

const CodeVerification = () => {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const [isActive, setIsActive] = useState(0);
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInput = (index, event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      return;
    }
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
    setIsActive(index + 1);
    if (index < 5 && value !== '') {
      refs[index + 1].current.focus();
    }
  };

  useEffect(() => {
    refs[0].current.focus();
    setIsActive(0);
  }, []);

  return (
    <div className="flex justify-center">
      {codes.map((code, index) => (
        <input
          key={index}
          type="text"
          className={`w-12 h-12 mx-2 text-center text-3xl rounded focus:outline-none ${
            isActive === index ? 'bg-primary bg-opacity-30' : 'bg-gray-300'
          }`}
          maxLength={1}
          value={code}
          onChange={(e) => handleInput(index, e)}
          ref={refs[index]}
        />
      ))}
    </div>
  );
};

export default CodeVerification;
