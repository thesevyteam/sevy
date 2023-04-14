// import '@/app/global.css';

function Price({
  price,
  prefix,
  startingPrice = false,
  currency = 'GH₵',
  small = false,
}) {
  return (
    <div
      className={`font-bold flex items-center gap-1 ${
        small ? 'text-sm' : 'text-lg'
      }`}
    >
      {prefix && <span>{prefix}</span>}
      <span>{currency}</span>
      <span>{price.toFixed(2)}</span>
      {startingPrice && <span>(Starting Price)</span>}
    </div>
  );
}

export default Price;
