function Price({
  price,
  prefix,
  startingPrice = false,
  currency = 'GH₵',
  small = false,
}) {
  return (
    <div
      className={`font-bold flex justify-center items-center gap-1 ${
        small ? 'text-sm' : 'text-lg'
      }`}
    >
      {prefix && <span>{prefix}</span>}
      {startingPrice && <span>Starting from</span>}
      <span>{currency}</span>
      <span>{price}</span>
    </div>
  );
}

export default Price;
