import Image from 'next/image';
import Link from 'next/link';

function ServiceCard({ icon, service }) {
  return (
    <Link href={`/categories/${service.toLowerCase()}`}>
      <div className="h-40 rounded-md shadow-md bg-white flex justify-center items-center flex-col gap-4 cursor-pointer hover:shadow-lg">
        <div className="text-primary">
          <Image alt="Service icon" src={icon} width={36} height={36} />
        </div>
        <p className="text-xl font-semibold">{service}</p>
      </div>
    </Link>
  );
}

export default ServiceCard;
