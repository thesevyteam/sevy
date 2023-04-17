import Button from '@/shared/components/button';
import { BsFillChatLeftFill, BsXLg } from 'react-icons/bs';

const AppointmentCard = ({
  appointment: { service, provider, date, time, notes },
}) => {
  const today = new Date();
  const appointmentDate = new Date(date);
  const daysDifference = Math.ceil(
    (appointmentDate - today) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white p-3 rounded-md shadow-md hover:shadow-lg flex flex-col lg:flex-row cursor-default">
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-xl font-semibold w-fit">{service}</h3>
        <p className="text-primary cursor-pointer w-fit">{provider}</p>
        <p className="w-fit">{`${date} at ${time}`}</p>
        <p className="w-fit">In {daysDifference} days</p>
        <p className="w-fit text-gray-500">{notes}</p>
      </div>
      <div className="flex mt-2 lg:mt-0 flex-row-reverse lg:flex-col gap-2 justify-center items-center lg:justify-start">
        <div className="w-1/2 lg:w-full">
          <Button
            text="Chat"
            icon={<BsFillChatLeftFill style={{ width: 16, height: 16 }} />}
            className={'w-full'}
          />
        </div>
        <div className="w-1/2 lg:w-full">
          <Button
            text="Cancel"
            color="bg-primary-red hover:bg-primary-red-600"
            icon={<BsXLg style={{ width: 16, height: 16 }} />}
            className={'w-full'}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
