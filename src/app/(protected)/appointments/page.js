'use client';
import { useState } from 'react';
import AppointmentCard from '../(protected)/appointments/components/AppointmentCard';

const Appointments = () => {
  const appointments = [
    {
      service: 'House-hold Plumbing Services',
      provider: 'John Doe',
      date: '2023-06-01',
      time: '10:00 AM',
      notes: 'The tap might need to be replaced',
      type: 'incoming',
    },
    {
      service: 'Pool Cleaning',
      provider: 'Martin Bodai',
      date: '2023-06-01',
      time: '10:00 AM',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. delectus quidem, quae a te dicta sunt, arbitror. ',
      type: 'outgoing',
    },
  ];

  const [filter, setFilter] = useState('all');

  const filteredAppointments = appointments.filter((appointment) => {
    if (filter === 'all') {
      return true;
    }
    return appointment.type === filter;
  });

  return (
    <div className="my-20 min-h-screen screen-padding">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="space-y-2">
            <button
              onClick={() => setFilter('all')}
              className={`w-full text-left py-2 px-4 rounded-md shadow-md hover:shadow-lg ${
                filter === 'all' ? 'bg-primary text-white' : 'bg-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('incoming')}
              className={`w-full text-left py-2 px-4 rounded-md shadow-md hover:shadow-lg  ${
                filter === 'incoming' ? 'bg-primary text-white' : 'bg-white'
              }`}
            >
              Incoming
            </button>
            <button
              onClick={() => setFilter('outgoing')}
              className={`w-full text-left py-2 px-4 rounded-md shadow-md hover:shadow-lg  ${
                filter === 'outgoing' ? 'bg-primary text-white' : 'bg-white'
              }`}
            >
              Outgoing
            </button>
          </div>
        </div>
        <div className="w-full lg:w-3/4 lg:pl-8 pt-8 lg:pt-0 ">
          <div className="flex flex-col gap-4">
            {filteredAppointments.map((appointment, index) => (
              <AppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
