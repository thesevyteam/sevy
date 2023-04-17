import Image from 'next/image';

const ContactList = ({ contacts, selectedContact, selectContact }) => {
  const handleContactClick = (contact) => {
    selectContact(contact);
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className={`card ${
              selectedContact?.id === contact?.id ? 'bg-primary' : 'bg-white'
            } flex items-center cursor-pointer mb-2 lg:mr-3`}
            onClick={() => handleContactClick(contact)}
          >
            <Image
              src={contact.avatar}
              alt={`Profile Picture of ${contact.name}`}
              width={40}
              height={40}
              className="rounded-full mr-4"
            />
            <strong
              className={`${
                selectedContact?.id === contact?.id && 'text-white'
              }`}
            >
              {contact.name}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
