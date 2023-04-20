import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BsPersonFillCheck } from 'react-icons/bs';

function AllSetUp() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="space-y-4 my-2 flex flex-col items-center justify-center w-full">
      <BsPersonFillCheck
        style={{ width: 120, height: 120 }}
        className="text-primary"
      />
      <h3>All Done</h3>
    </div>
  );
}

export default AllSetUp;
