import { toggleBodyScroll } from '@/utils/scroll';
import { useEffect, useState } from 'react';
import NotificationCard from './NotificationCard';

const NotificationTray = ({ isOpen, handleClose }) => {
  // Dummy notifications data
  const notifications = [
    {
      icon: 'A',
      title: 'Appointment',
      description: 'You have an appointment tomorrow at 3 PM.',
      time: '5 minutes ago',
    },
    {
      icon: 'B',
      title: 'Booking',
      description: 'Wofa Kwaku wants to book your service.',
      time: '16 minutes ago',
    },
    {
      icon: 'A',
      title: 'Appointment',
      description: 'You have an appointment tomorrow at 3 PM.',
      time: '45 minutes ago',
    },
    {
      icon: 'P',
      title: 'Payment',
      description: 'Payment of $200 received from Obi Wilfred.',
      time: '1 hour ago',
    },
    {
      icon: 'A',
      title: 'Appointment',
      description: 'You have an appointment tomorrow at 3 PM.',
      time: '5 minutes ago',
    },
    {
      icon: 'B',
      title: 'Booking',
      description: 'Wofa Kwaku wants to book your service.',
      time: '16 minutes ago',
    },
    {
      icon: 'A',
      title: 'Appointment',
      description: 'You have an appointment tomorrow at 3 PM.',
      time: '45 minutes ago',
    },
    {
      icon: 'P',
      title: 'Payment',
      description: 'Payment of $200 received from Obi Wilfred.',
      time: '1 hour ago',
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      toggleBodyScroll(true);
    }
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) {
      setVisible(false);
      handleClose();
      toggleBodyScroll(false);
    }
  };

  return visible ? (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      className={`z-[11] absolute bottom-0 right-0 top-0 left-0 flex justify-end`}
      onClick={handleClose}
    >
      <div
        className={`z-[12] w-full lg:w-2/6 bg-white p-3 shadow-md h-full lg:h-screen hide-scrollbar overflow-scroll ${
          isOpen ? 'tray-open' : 'tray-close'
        }`}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <button
            className="text-primary text-sm font-semibold"
            onClick={handleClose}
          >
            Clear all
          </button>
        </div>
        {notifications.map((notification, index) => (
          <NotificationCard key={index} notification={notification} />
        ))}
      </div>
    </div>
  ) : null;
};

export default NotificationTray;
