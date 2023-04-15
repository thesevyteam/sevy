import Image from 'next/image';
import Link from 'next/link';

function Logo({ href, className }) {
  return (
    <Link href={href} className={`flex items-center ${className}`}>
      <Image src="/logo_icon.svg" width="32" height="32" alt="sevy logo icon" />
      <Image
        src="/logo_text.svg"
        height="32"
        width="58"
        className="mt-3 hidden md:block"
        alt="sevy logo text"
      />
    </Link>
  );
}

export default Logo;
