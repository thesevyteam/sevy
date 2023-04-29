function Price({
  price,
  prefix,
  startingPrice = false,
  currency = 'GH₵',
  small = false,
  bold = true,
  shrink = false,
}) {
  return (
    <div className="flex items-center gap-1">
      {prefix && (
        <span
          className={`${bold ? 'font-bold' : ''} ${
            small ? 'text-xs' : 'text-md'
          }`}
        >
          {prefix}
        </span>
      )}
      <span
        className={`${bold ? 'font-bold' : ''} flex ${
          small ? 'text-sm' : 'text-lg'
        }`}
      >
        {currency}
      </span>
      <span
        className={`${bold ? 'font-bold' : ''} ${
          small ? 'text-sm' : 'text-lg'
        }`}
      >
        {price}
      </span>
      {startingPrice && (
        <span
          className={`${shrink ? 'hidden lg:block' : 'block'} ${
            bold ? 'font-bold' : ''
          } ${small ? 'text-xs' : 'text-md'}`}
        >
          (Starting Price)
        </span>
      )}
    </div>
  );
}

export default Price;
