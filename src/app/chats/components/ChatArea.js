import Button from '@/shared/components/button';
import Image from 'next/image';
import { useState } from 'react';
import { BsSendFill } from 'react-icons/bs';
import { IoIosArrowRoundBack } from 'react-icons/io';
import ChatBubble from './ChatBubble';

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    content: 'Hello!',
    avatar:
      'https://instagram.facc6-1.fna.fbcdn.net/v/t51.2885-19/339492185_1498778010652311_6887828300750621733_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=FmyPxINUTgAAX9px5kX&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AfD7HRrH1tBWJpgHPpUTRtDyEeylmCtDVIJ_Srt1VqeoxQ&oe=64407DEC&_nc_sid=195af5',
  },
  {
    id: 2,
    sender: 'Jane Smith',
    content: 'Hi there!',
    avatar:
      'https://instagram.facc6-1.fna.fbcdn.net/v/t51.2885-19/306601362_5351244184988191_8400661973898997295_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=y3DKTYPHrtEAX9DOt4D&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AfCz_1MfJuchmRaZRtCJkX6jpQCESav0x2xmTrq2m3zFhw&oe=6441E6B2&_nc_sid=195af5',
  },
  {
    id: 3,
    sender: 'Jane Smith',
    content: 'Hi there!',
    avatar:
      'https://instagram.facc6-1.fna.fbcdn.net/v/t51.2885-19/306601362_5351244184988191_8400661973898997295_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=y3DKTYPHrtEAX9DOt4D&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AfCz_1MfJuchmRaZRtCJkX6jpQCESav0x2xmTrq2m3zFhw&oe=6441E6B2&_nc_sid=195af5',
  },
];

const ChatArea = ({ selectedContact, selectContact }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Send the message and clear the input
  };

  const handleBackClick = () => {
    selectContact(null);
  };

  return (
    <div className="z-30 lg:z-0 absolute top-0 bottom-14 right-0 left-0 lg:relative flex flex-col lg:h-full">
      {selectedContact ? (
        <>
          <div className="lg:hidden flex items-center gap-2 p-2 bg-primary-100 border-y border-primary lg:rounded-t-md">
            <div
              className="text-primary cursor-pointer"
              onClick={handleBackClick}
            >
              <IoIosArrowRoundBack style={{ width: 32, height: 32 }} />
            </div>
            <div className="flex items-center">
              <div className="relative">
                <Image
                  src={selectedContact.avatar}
                  alt={selectedContact.name}
                  className="rounded-full"
                  width={32}
                  height={32}
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-2">
                <strong>{selectedContact.name}</strong>
                <p className="text-sm">3hrs Ago</p>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto p-4 flex-grow bg-bg rounded-t-md">
            {messages.map((msg) => {
              const author = msg.sender === 'Jane Smith';
              return <ChatBubble key={msg.id} msg={msg} author={author} />;
            })}
          </div>
          <div className="flex p-4 border-y lg:border-y-0 lg:border-t border-primary bg-primary-100 lg:rounded-b-md">
            <input
              className="input mr-3"
              id="input_message"
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button
              icon={<BsSendFill style={{ width: 16, height: 16 }} />}
              text={'Send'}
              onClick={handleSendMessage}
              roundOnShrink={true}
              shrink={true}
            />
          </div>
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <h2 className="text-lg font-semibold">
            Select a contact to start chatting
          </h2>
        </div>
      )}
    </div>
  );
};

export default ChatArea;
