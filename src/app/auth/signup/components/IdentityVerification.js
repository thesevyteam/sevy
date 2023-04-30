'use client';

import SelectField from '@/shared/components/SelectField';
import Button from '@/shared/components/button';
import { useEffect, useRef, useState } from 'react';
import { AiFillIdcard } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';

function IdentityVerification({ idInfo, setIDInfo }) {
  const [idFile, setIDFile] = useState(null);
  const [ppFile, setPPFile] = useState(null);
  const [idType, setIDType] = useState();
  const [idNum, setIDNum] = useState();
  const [idPreviewUrl, setIDPreviewUrl] = useState(null);
  const [ppPreviewUrl, setPPPreviewUrl] = useState(null);
  const idUploadInputRef = useRef();
  const ppUploadInputRef = useRef();

  useEffect(() => {
    setIDInfo({
      idType,
      idNum,
      idFile,
      ppFile,
    });
  }, [idType, idNum, idPreviewUrl, ppPreviewUrl]);

  const handleIDFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setIDPreviewUrl(url);
      setIDFile(file);
    } else {
      setIDPreviewUrl(null);
      setIDFile(null);
    }
  };

  const handlePPFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPPPreviewUrl(url);
      setPPFile(file);
    } else {
      setPPPreviewUrl(null);
      setPPFile(null);
    }
  };

  const handleIDTypeChange = (_idt) => {
    setIDType(_idt);
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-bold tracking-wide">Verify Your identity</p>
      {ppPreviewUrl && (
        <div className="w-full flex justify-center items-center">
          <img
            src={ppPreviewUrl}
            alt="Preview"
            className="w-44 h-44 rounded-full"
          />
        </div>
      )}
      <div className="w-full">
        <label htmlFor="pp_file_nput" className="label">
          Upload Profile Picture
        </label>
        <Button
          className={'w-full'}
          text={'Choose Image'}
          icon={<RxAvatar style={{ width: 18, height: 18 }} />}
          onClick={() => ppUploadInputRef.current?.click()}
        />
        <input
          id="pp_file_nput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePPFileChange}
          required
          ref={ppUploadInputRef}
        />
      </div>
      {idPreviewUrl && (
        <div className="w-full flex justify-center items-center">
          <img src={idPreviewUrl} alt="Preview" className="w-full" />
        </div>
      )}
      <div className="w-full">
        <label htmlFor="id_file_input" className="label">
          Upload ID card
        </label>
        <Button
          className={'w-full'}
          text={'Choose Image'}
          icon={<AiFillIdcard style={{ width: 18, height: 18 }} />}
          onClick={() => idUploadInputRef.current?.click()}
        />
        <input
          id="id_file_input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleIDFileChange}
          required
          ref={idUploadInputRef}
        />
      </div>
      <div>
        <label htmlFor="id_type" className="label">
          ID Type
        </label>
        <SelectField
          id="id_type"
          value={idType}
          onBg={true}
          options={[
            { value: 'National ID', label: 'National ID' },
            { value: "Voter's ID", label: "Voter's ID" },
            { value: "Driver's License", label: "Driver's License" },
            { value: 'Passport', label: 'Passport' },
          ]}
          onChange={handleIDTypeChange}
        />
      </div>
      <div className="">
        <label className="block text-sm font-bold mb-2" htmlFor="fname">
          ID Number
        </label>
        <input
          className="input__bg"
          id="idNum"
          type="text"
          placeholder="GHA-721-0000-0000-0"
          value={idNum}
          onChange={(e) => setIDNum(e.target.value.trim())}
          required
        />
      </div>
    </div>
  );
}

export default IdentityVerification;
