import { HiLocationMarker } from 'react-icons/hi';

function CapsuleIndicator({
  className = 'flex',
  iconClassName = 'text-primary',
  textClassName = 'text-primary',
  location,
  text,
  icon,
  bg = true,
  small = false,
  padding = true,
}) {
  return (
    <div
      className={`${className} ${
        padding ? (small ? 'py-0.5 px-1.5' : 'py-1 px-2') : 'p-0'
      } rounded-full justify-center items-center gap-1 w-fit ${
        bg &&
        'cursor-pointer bg-primary bg-opacity-30 hover:bg-primary-900 hover:bg-opacity-30'
      }`}
    >
      {location ? (
        <HiLocationMarker
          className={iconClassName}
          style={{ width: small ? 14 : 16, height: small ? 14 : 16 }}
        />
      ) : (
        icon && icon
      )}
      <span
        className={`${
          small ? 'text-xs' : 'text-sm'
        } font-semibold text-opacity-60 ${textClassName}`}
      >
        {text}
      </span>
    </div>
  );
}

export default CapsuleIndicator;
