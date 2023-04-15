// import '@/app/global.css';

function Price({
  price,
  prefix,
  startingPrice = false,
  currency = 'GH₵',
  small = false,
}) {
  return (
    <div className="flex items-center gap-1">
      {prefix && (
        <span className={`font-bold ${small ? 'text-xs' : 'text-md'}`}>
          {prefix}
        </span>
      )}
      <span className={`font-bold flex ${small ? 'text-sm' : 'text-lg'}`}>
        {currency}
      </span>
      <span className={`font-bold ${small ? 'text-sm' : 'text-lg'}`}>
        {price.toFixed(2)}
      </span>
      {startingPrice && (
        <span className={`font-bold ${small ? 'text-xs' : 'text-md'}`}>
          (Starting Price)
        </span>
      )}
    </div>
  );
}

export default Price;
