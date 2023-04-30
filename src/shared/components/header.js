'use client';

import '@/app/globals.css';
import { useAuth } from '@/context/AuthContext';
import { toggleBodyScroll } from '@/utils/scroll';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  BsCalendarWeekFill,
  BsFillBookmarkFill,
  BsFillChatLeftFill,
  BsFillExclamationDiamondFill,
} from 'react-icons/bs';
import { RiNotificationFill } from 'react-icons/ri';
import AppModal from './AppModal';
import EmergencyBooking from './EmergencyBooking';
import NotificationTray from './NotificationTray';
import Button from './button';
import CapsuleIndicator from './capsuleIndicator';
import Logo from './logo';
import NavIcon from './navIcon';

const iconStyle = { width: 16, height: 16 };

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [closingEmergencyModal, setClosingEmergencyModal] = useState(false);
  const { user } = useAuth();
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const navBtns = (showShadow = true) => {
    return (
      <>
        <NavIcon
          href={'bookmarks'}
          shadow={showShadow ? !isScrolled : false}
          icon={<BsFillBookmarkFill style={iconStyle} />}
        />
        <NavIcon
          href={'chats'}
          shadow={showShadow ? !isScrolled : false}
          icon={<BsFillChatLeftFill style={iconStyle} />}
        />
        <NavIcon
          href={'appointments'}
          shadow={showShadow ? !isScrolled : false}
          icon={<BsCalendarWeekFill style={iconStyle} />}
        />
        <NavIcon
          shadow={showShadow ? !isScrolled : false}
          icon={
            <RiNotificationFill style={iconStyle} onClick={handleTrayOpen} />
          }
        />
      </>
    );
  };

  const handleTrayOpen = () => {
    setIsTrayOpen(true);
  };

  const handleTrayClose = () => {
    setIsTrayOpen(false);
  };

  const openEmergencyModal = () => {
    setEmergencyModalOpen(true);
    toggleBodyScroll(true);
  };

  const closeEmergencyModal = () => {
    setClosingEmergencyModal(true);
    setTimeout(() => {
      setEmergencyModalOpen(false);
      setClosingEmergencyModal(false);
      toggleBodyScroll(false);
    }, 290);
  };

  return (
    <>
      <header
        className={`flex justify-between items-center h-14 md:h-16 screen-padding inset-x-0 fixed z-10 transition-all duration-200 ${
          isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
        }`}
      >
        <div
          className={`h-full px-2  flex justify-between items-center ${
            isScrolled ? 'bg-white' : 'bg-transparent'
          }`}
        >
          <Logo href={'/'} />
        </div>
        <CapsuleIndicator
          className="hidden lg:flex"
          iconClassName={isScrolled ? 'text-white' : 'text-primary'}
          textClassName={isScrolled ? 'text-white' : 'text-primary'}
          text={`${user.city}, GH`}
          location={true}
        />
        <div className="flex justify-center items-center gap-5">
          <Button
            text="Emergency"
            color="bg-primary-red hover:bg-primary-red-600"
            icon={<BsFillExclamationDiamondFill />}
            shrink={true}
            roundOnShrink={true}
            onClick={openEmergencyModal}
          />
          <div className="hidden lg:flex justify-center items-center gap-5">
            {navBtns()}
          </div>
          <NavIcon
            href={`profile/${user?.uid}`}
            img={
              <Image
                src={user?.profile_picture}
                // width="40"
                // height="40"
                fill
                alt="Your Profile Picture"
                className="rounded-full"
                style={{ objectFit: 'cover' }}
              />
            }
          />
        </div>
      </header>
      <div className="bottom-0 fixed h-14 inset-x-0 flex lg:hidden justify-between items-center z-50 px-2 sm:px-6 bg-primary shadow-t-md">
        {navBtns(false)}
      </div>
      <NotificationTray isOpen={isTrayOpen} handleClose={handleTrayClose} />
      <AppModal
        isOpen={emergencyModalOpen}
        closing={closingEmergencyModal}
        closeModal={closeEmergencyModal}
      >
        <EmergencyBooking closeModal={closeEmergencyModal} />
      </AppModal>
    </>
  );
}

export default Header;
