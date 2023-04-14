function NavIcon({
  icon,
  img,
  color = 'bg-primary hover:bg-primary-900',
  shadow,
  onClick,
}) {
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
    <div className=" h-10 w-10 hover:border-primary hover:border-2 shadow-md rounded-full cursor-pointer hover:shadow-lg">
      {img}
    </div>
  );
}

export default NavIcon;
