import '@/app/globals.css';

function Button({
  type = 'primary',
  shrink = false,
  roundOnShrink = false,
  text,
  color = 'bg-primary hover:bg-primary-600',
  icon,
  textColor = '#fff',
  iconColor = 'text-white',
  round = false,
  className,
}) {
  return (
    <div
      className={`h-10 px-3 flex justify-center items-center gap-2 cursor-pointer shadow-md active:px-2.5 active:scale-95 transition-all duration-200 ${
        round
          ? 'rounded-full'
          : roundOnShrink
          ? 'rounded-full md:rounded-md'
          : 'rounded-md'
      } hover:shadow-lg ${color + ' ' + iconColor + ' ' + className}`}
    >
      {icon && icon}
      {text && (
        <span
          style={{ color: textColor }}
          className={`${shrink && 'hidden md:block'}`}
        >
          {text}
        </span>
      )}
    </div>
  );
}

export default Button;
