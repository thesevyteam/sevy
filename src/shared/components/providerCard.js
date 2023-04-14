import CapsuleIndicator from '@/shared/components/capsuleIndicator';
import Image from 'next/image';
import Price from './price';
import Rating from './rating';

function ProviderCard({
  img,
  service,
  provider,
  category,
  location,
  rating,
  price,
  distance,
}) {
  return (
    <div className="relative rounded-md shadow-md w-56 bg-white overflow-hidden cursor-pointer hover:shadow-lg">
      <diV className="relative h-32 overflow-hidden rounded-t-md">
        <Image
          alt="Image of service provided"
          src={img}
          fill
          className="h-4/6 overflow-hidden rounded-t-md"
          style={{ objectFit: 'cover' }}
        />
        <Rating
          rating={rating}
          small={true}
          className="absolute top-0 right-0 bg-white p-1 rounded-bl-md shadow-md"
        />
      </diV>
      <div className="p-2 flex flex-col gap-1">
        <div className="flex items-center justify-center gap-2">
          <p className="flex-1 text-ellipsis whitespace-nowrap overflow-hidden p-0 m-0">
            {service}
          </p>
          <Price price={price} small={true} />
        </div>
        <p className="text-sm text-primary">{provider}</p>
        <CapsuleIndicator text={category} small={true} />
        <CapsuleIndicator
          location={true}
          text={distance ? distance + ' km away' : location}
          bg={false}
          small={true}
          padding={false}
        />
      </div>
    </div>
  );
}

export default ProviderCard;
