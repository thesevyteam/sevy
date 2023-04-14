import Button from '@/shared/components/button';
import CapsuleIndicator from '@/shared/components/capsuleIndicator';
import Price from '@/shared/components/price';
import Rating from '@/shared/components/rating';
import { BsBookmark } from 'react-icons/bs';
import { MdHandshake } from 'react-icons/md';

function ServiceInfo({ serviceInfo }) {
  return (
    <div className="w-full bg-white rounded-md shadow-md flex flex-col p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{serviceInfo.name}</h2>
        <div className="flex items-center gap-8">
          <div className="cursor-pointer">
            <BsBookmark
              className="text-primary hover:scale-110 hover:text-primary-900 active:scale-95 transition-all duration-200"
              style={{ width: 24, height: 24 }}
            />
          </div>
          <Button
            icon={<MdHandshake style={{ width: 20, height: 20 }} />}
            text="Book"
            roundOnShrink={true}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <CapsuleIndicator text={serviceInfo.category} className="mb-2" />
        <Rating rating={serviceInfo.rating} className="flex lg:hidden" />
      </div>
      <Price price={serviceInfo.startingPrice} startingPrice={true} />
      <div className="flex items-center justify-between">
        <h3 className="text-primary">{serviceInfo.provider.name}</h3>
        <CapsuleIndicator
          location={true}
          text={serviceInfo.provider.location}
          padding={false}
          bg={false}
        />
      </div>
      <div>
        <p className="text-sm text-gray-500 mt-4">{serviceInfo.description}</p>
      </div>
    </div>
  );
}

export default ServiceInfo;
