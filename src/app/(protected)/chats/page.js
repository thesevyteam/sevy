'use client';

import { useState } from 'react';
import ChatArea from './components/ChatArea';
import ContactList from './components/ContactList';
import SelectedContactInfo from './components/SelectedContactInfo';

const contacts = [
  {
    id: 1,
    name: 'John Doe',
    avatar:
      'https://instagram.facc6-1.fna.fbcdn.net/v/t51.2885-19/339492185_1498778010652311_6887828300750621733_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=FmyPxINUTgAAX9px5kX&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AfD7HRrH1tBWJpgHPpUTRtDyEeylmCtDVIJ_Srt1VqeoxQ&oe=64407DEC&_nc_sid=195af5',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar:
      'https://instagram.facc6-1.fna.fbcdn.net/v/t51.2885-19/306601362_5351244184988191_8400661973898997295_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=y3DKTYPHrtEAX9DOt4D&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AfCz_1MfJuchmRaZRtCJkX6jpQCESav0x2xmTrq2m3zFhw&oe=6441E6B2&_nc_sid=195af5',
  },
];

const Chats = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  return (
    <div className="h-75vh lg:h-80vh flex my-20 lg:screen-padding">
      {
        <div
          className={`${
            selectedContact ? 'hidden' : 'lg:block'
          } w-full lg:block lg:w-1/4 h-full`}
        >
          <ContactList
            contacts={contacts}
            selectedContact={selectedContact}
            selectContact={setSelectedContact}
          />
        </div>
      }
      <div
        className={`${
          selectedContact ? 'lg:block' : 'hidden'
        } lg:block lg:w-1/2 w-full  h-full lg:rounded-md lg:border border-primary`}
      >
        <ChatArea
          selectedContact={selectedContact}
          selectContact={setSelectedContact}
        />
      </div>
      <div className={`hidden lg:block lg:w-1/4 w-full h-full`}>
        <SelectedContactInfo selectedContact={selectedContact} />
      </div>
    </div>
  );
};

export default Chats;
