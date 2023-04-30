import Link from 'next/link';

function NavIcon({
  icon,
  img,
  color = 'bg-primary hover:bg-primary-900',
  shadow,
  onClick,
  href,
}) {
  const buildIcon = () => {
    return icon ? (
      <div
        onClick={onClick}
        className={`${color} ${
          shadow ? 'shadow-md hover:shadow-lg' : 'shadow-none'
        } h-10 w-10 cursor-pointer rounded-full text-white flex justify-center items-center`}
      >
        {icon}
      </div>
    ) : (
      <div className="relative h-10 w-10 hover:border-primary hover:border-2 shadow-md rounded-full cursor-pointer hover:shadow-lg overflow-hidden">
        {img}
      </div>
    );
  };
  return href ? <Link href={`/${href}`}>{buildIcon()}</Link> : buildIcon();
}

export default NavIcon;
