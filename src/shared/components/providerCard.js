import CapsuleIndicator from '@/shared/components/capsuleIndicator';
import Image from 'next/image';
import Link from 'next/link';
import Price from './price';
import Rating from './rating';

function ProviderCard({
  type = 'default',
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
    description,
  },
}) {
  return (
    <Link
      href={`/services/${id}`}
      className={`flex ${
        type === 'wide' ? 'w-full flex-row h-48' : 'flex-col w-56'
      } relative rounded-md shadow-md bg-white overflow-hidden cursor-pointer hover:shadow-lg`}
    >
      <div
        className={`relative overflow-hidden ${
          type === 'wide' ? 'h-full w-1/3 rounded-l-md' : 'h-32 rounded-t-md'
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
              ? 'left-0 bottom-0 rounded-tr-md'
              : 'top-0 right-0 rounded-bl-md'
          } bg-white p-1 shadow-md`}
        />
      </div>
      <div
        className={`p-2 flex flex-col ${
          type === 'wide' ? 'justify-between w-2/3' : 'gap-1'
        }`}
      >
        <div
          className={`flex gap-2 items-center ${
            type === 'wide' ? 'justify-between' : 'justify-center'
          }`}
        >
          <p
            className={`${
              type === 'wide'
                ? ''
                : 'whitespace-nowrap overflow-hidden text-ellipsis flex-1'
            } p-0 m-0`}
          >
            {service}
          </p>
          <Price price={price} small={true} startingPrice={true} />
        </div>
        <p className="text-sm text-primary">{provider}</p>
        <CapsuleIndicator text={category} small={true} />
        <p className="text-sm text-gray-500 two-line-ellipsis">{description}</p>
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
