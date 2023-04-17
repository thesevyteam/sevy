const NotificationCard = ({ notification }) => {
  return (
    <div className="cursor-default bg-primary-100 border-primary border rounded-md p-3 mb-2 shadow-md hover:shadow-lg">
      <div className="flex">
        <div
          className={`w-9 lg:w-12 h-9 lg:h-12 ${
            notification.icon === 'A'
              ? 'bg-purple-600'
              : notification.icon === 'P'
              ? 'bg-green-600'
              : 'bg-blue-500'
          } rounded-full mr-4 flex items-center justify-center text-white`}
        >
          {notification.icon}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold">{notification.title}</h4>
          <p>{notification.description}</p>
          <span className="text-sm text-gray-500">{notification.time}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
