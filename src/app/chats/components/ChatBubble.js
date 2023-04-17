import Image from 'next/image';

function ChatBubble({ msg, author }) {
  return (
    <div
      key={msg.id}
      className={`flex items-start ${author ? 'flex-row-reverse' : ''} mb-4`}
    >
      <Image
        src={msg.avatar}
        alt={msg.sender}
        className={`rounded-full shadow-md ${author ? 'ml-4' : 'mr-4'}`}
        width={32}
        height={32}
      />
      <div>
        <p
          className={`${
            author
              ? 'bg-primary text-white'
              : 'bg-primary-100 border border-primary'
          } rounded-md p-2 shadow-md cursor-default`}
        >
          {msg.content}
        </p>
      </div>
    </div>
  );
}

export default ChatBubble;
