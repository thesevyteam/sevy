const { default: Rating } = require('@/shared/components/rating');
const { default: Image } = require('next/image');

function ReviewTile({ review }) {
  return (
    <div className="w-full border-b p-2 px-5 sm:px-8">
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={review.image}
            alt="Reviewer image"
            width={40}
            height={40}
            objectFit="cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{review.name}</p>
            <Rating rating={review.rating} small={true} />
          </div>
          <p className="mt-1">{review.review}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewTile;
