import CapsuleIndicator from '@/shared/components/capsuleIndicator';
import Image from 'next/image';
import Link from 'next/link';
import { BsPauseFill } from 'react-icons/bs';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import Button from './button';
import Price from './price';
import Rating from './rating';

const iconStyle = { width: 16, height: 16 };
function ProviderCard({
  type = 'default',
  width = 'w-56',
  data: {
    id,
    img,
    service,
    provider,
    category,
    location,
    rating,
    price,
    distance,
    description = 'grttrrtrytr htdyrdtrdtr yd6trd',
    owner = false,
  },
}) {
  return (
    <Link
      href={`/services/${id}`}
      className={`group flex ${
        type === 'wide'
          ? 'w-full flex-col lg:flex-row lg:h-48'
          : `flex-col ${width}`
      } relative rounded-md shadow-md bg-white overflow-hidden cursor-pointer hover:shadow-lg`}
    >
      {owner && (
        <div className="z-[5] absolute top-0 right-0 bottom-0 left-0 transparent group-hover:backdrop-blur-md invisible flex flex-col gap-2 justify-center items-center group-hover:visible">
          <Button text="Edit" icon={<MdModeEditOutline style={iconStyle} />} />
          <Button
            text="Pause"
            color="bg-orange-400 hover:bg-orange-500"
            icon={<BsPauseFill style={iconStyle} />}
          />
          <Button
            text="Delete"
            color="bg-primary-red hover:bg-primary-red-600"
            icon={<MdDelete style={iconStyle} />}
          />
        </div>
      )}
      <div
        className={`relative overflow-hidden ${
          type === 'wide'
            ? 'h-32 lg:h-full lg:w-1/3 rounded-t-md lg:rounded-t-none lg:rounded-l-md'
            : 'h-32 rounded-t-md'
        }`}
      >
        <Image
          alt="Image of service provided"
          src={img}
          fill
          className={`overflow-hidden`}
          style={{ objectFit: 'cover' }}
        />
        <Rating
          rating={rating}
          small={true}
          className={`absolute ${
            type === 'wide'
              ? 'top-0 right-0 rounded-bl-md lg:top-auto lg:right-auto lg:rounded-bl-none lg:left-0 lg:bottom-0 lg:rounded-tr-md'
              : 'top-0 right-0 rounded-bl-md'
          } bg-white p-1 shadow-md`}
        />
      </div>
      <div
        className={`p-2 flex flex-col ${
          type === 'wide' ? 'justify-between gap-1 lg:w-2/3' : 'gap-1'
        }`}
      >
        <div
          className={`flex gap-2 items-center ${
            type === 'wide'
              ? 'justify-center lg:justify-between'
              : 'justify-center'
          }`}
        >
          <p
            title={service}
            className={`whitespace-nowrap overflow-hidden text-ellipsis flex-1 p-0 m-0`}
          >
            {service}
          </p>
          <Price
            price={price}
            small={true}
            startingPrice={type === 'wide' ? true : false}
            shrink={type === 'wide' ? true : false}
          />
        </div>
        <p className="text-sm text-primary">{provider}</p>
        <CapsuleIndicator text={category} small={true} />
        {type === 'wide' && (
          <p className="hidden text-sm text-gray-500 lg:two-line-ellipsis">
            {description}
          </p>
        )}
        <CapsuleIndicator
          location={true}
          text={distance ? distance + ' km away' : location}
          bg={false}
          small={true}
          padding={false}
        />
      </div>
    </Link>
  );
}

export default ProviderCard;
