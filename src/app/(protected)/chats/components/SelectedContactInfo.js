import Image from 'next/image';

const SelectedContactInfo = ({ selectedContact }) => {
  return (
    selectedContact && (
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={selectedContact.avatar}
            alt={selectedContact.name}
            className="rounded-full mb-2"
            width={80}
            height={80}
          />
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">{selectedContact.name}</h3>
            <p>Carpenter</p>
            <p>Osu</p>
            <p>Last Seen: 3hrs Ago</p>
          </div>
        </div>
      </div>
    )
  );
};

export default SelectedContactInfo;
