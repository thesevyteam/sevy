import Button from '@/shared/components/button';
import { BsFillChatLeftFill, BsX } from 'react-icons/bs';

const AppointmentCard = ({
  appointment: { service, provider, date, time, notes },
}) => {
  const today = new Date();
  const appointmentDate = new Date(date);
  const daysDifference = Math.ceil(
    (appointmentDate - today) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white p-3 rounded-md shadow-md hover:shadow-lg flex cursor-default">
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-xl font-semibold w-fit">{service}</h3>
        <p className="text-primary cursor-pointer w-fit">{provider}</p>
        <p className="w-fit">{`${date} at ${time}`}</p>
        <p className="w-fit">In {daysDifference} days</p>
        <p className="w-fit text-gray-500">{notes}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          text="Chat"
          icon={<BsFillChatLeftFill style={{ width: 16, height: 16 }} />}
        />
        <Button
          text="Cancel"
          color="bg-primary-red hover:bg-primary-red-600"
          icon={<BsX style={{ width: 24, height: 24 }} />}
        />
      </div>
    </div>
  );
};

export default AppointmentCard;
