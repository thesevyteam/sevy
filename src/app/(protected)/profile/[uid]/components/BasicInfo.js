import Button from '@/shared/components/button';
import CapsuleIndicator from '@/shared/components/capsuleIndicator';
import Image from 'next/image';
import { BsFillChatLeftFill } from 'react-icons/bs';

const BasicInfo = ({ details }) => {
  return (
    <div className="card flex flex-col justify-center items-center space-y-2">
      <div className="relative overflow-hidden w-36 h-36">
        <Image
          src={details.profile_picture}
          // width={142}
          // height={142}
          fill={true}
          alt="Profile Picture"
          className="rounded-full"
          style={{ objectFit: 'cover' }}
        />
        {/* <div className="cursor-pointer absolute bottom-0 right-0 shadow-md hover:shadow-lg bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center">
          <TiCamera />
        </div> */}
      </div>
      <h2 className="text-xl font-bold">{`${details.first_name} ${details.last_name}`}</h2>
      <p className="">{details.jobTitle}</p>
      <CapsuleIndicator
        location={true}
        text={details.city}
        bg={false}
        padding={false}
      />
      <p className="">{details.lastSeen}</p>
      <p className="">{details.createdAt}</p>
      <Button
        text="Chat"
        icon={<BsFillChatLeftFill style={{ width: 16, height: 16 }} />}
      />
    </div>
  );
};

export default BasicInfo;
