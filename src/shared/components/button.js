import '@/app/globals.css';

function Button({
  type = 'primary',
  shrink = false,
  roundOnShrink = false,
  text,
  color = 'bg-primary hover:bg-primary-600',
  icon,
  textColor = 'text-white',
  iconColor = 'text-white',
  round = false,
  className,
  onClick,
  iconPlacement = 'left',
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`appearance-none outline-none active:outline-none px-3 flex justify-center items-center gap-2 cursor-pointer active:scale-95 transition-all duration-200 disabled:bg-opacity-50 disabled:cursor-default disabled:active:scale-100 
      ${type === 'text' ? '' : 'h-10 shadow-md hover:shadow-lg'} 
      ${type === 'primary' ? `${color}` : 'bg-transparent'}
      ${
        round
          ? 'rounded-full'
          : roundOnShrink
          ? 'rounded-full md:rounded-md'
          : 'rounded-md'
      } ${iconColor + ' ' + className} ${
        iconPlacement === 'right' && 'flex-row-reverse'
      }`}
    >
      {icon && icon}
      {text && (
        <span className={`${shrink && 'hidden md:block'} ${textColor}`}>
          {text}
        </span>
      )}
    </button>
  );
}

export default Button;
