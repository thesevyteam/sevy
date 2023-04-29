import { useEffect, useRef, useState } from 'react';
import LoadingIndicator from './LoadingIndicator';

const CodeVerification = ({ verify }) => {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const [isActive, setIsActive] = useState(0);
  const [verifying, setVerifying] = useState(false);

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
    refs[0]?.current?.focus();
    setIsActive(0);
  }, []);

  useEffect(() => {
    const allFilled = codes.every((code) => code !== '');
    if (allFilled) {
      handleVerification();
    }
  }, [codes, verify]);

  const handleVerification = async () => {
    setVerifying(true);
    const fullCode = codes.join('');
    await verify(fullCode);
    setVerifying(false);
  };
  return (
    <div className="flex justify-center">
      {verifying ? (
        <LoadingIndicator />
      ) : (
        codes.map((code, index) => (
          <input
            key={index}
            type="text"
            className={`w-9 md:w-12 h-9 md:h-12 mx-1 md:mx-2 text-center text-3xl rounded focus:outline-none ${
              isActive === index
                ? 'bg-primary-100 border-2 border-primary'
                : 'bg-gray-100'
            }`}
            maxLength={1}
            value={code}
            onChange={(e) => handleInput(index, e)}
            ref={refs[index]}
          />
        ))
      )}
    </div>
  );
};

export default CodeVerification;
