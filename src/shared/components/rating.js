import { AiFillStar } from 'react-icons/ai';

function Rating({ rating, small = false, className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      <div className="text-primary">
        <AiFillStar
          style={{
            width: small ? 16 : 24,
            height: small ? 16 : 24,
          }}
        />
      </div>
      <span className={`font-semibold ${small ? 'text-[0.8rem]' : 'text-lg'}`}>
        {rating}
      </span>
    </div>
  );
}

export default Rating;
