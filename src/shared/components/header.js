'use client';

import '@/app/globals.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  BsCalendarWeekFill,
  BsFillBookmarkFill,
  BsFillChatLeftFill,
  BsFillExclamationDiamondFill,
} from 'react-icons/bs';
import { RiNotificationFill } from 'react-icons/ri';
import Button from './button';
import CapsuleIndicator from './capsuleIndicator';
import Logo from './logo';
import NavIcon from './navIcon';

const iconStyle = { width: 16, height: 16 };

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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
          href={'notifications'}
          shadow={showShadow ? !isScrolled : false}
          icon={<RiNotificationFill style={iconStyle} />}
        />
      </>
    );
  };

  return (
    <>
      <header
        className={`flex justify-between items-center h-16 screen-padding inset-x-0 fixed z-10 transition-all duration-200 ${
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
          text="Cape Coast, GH"
          location={true}
        />
        <div className="flex justify-center items-center gap-5">
          <Button
            text="Emergency"
            color="bg-primary-red hover:bg-primary-red-600"
            icon={<BsFillExclamationDiamondFill />}
            shrink={true}
            roundOnShrink={true}
          />
          <div className="hidden lg:flex justify-center items-center gap-5">
            {navBtns()}
          </div>
          <NavIcon
            href={'profile'}
            img={
              <Image
                src="https://lh3.googleusercontent.com/ogw/AAEL6sgzhAdzY5doX3BSkEUnulrXEs1OSOMDeuzB96KTlw=s32-c-mo"
                width="40"
                height="40"
                alt="Your Profile Picture"
              />
            }
          />
        </div>
      </header>
      <div className="bottom-0 fixed h-14 inset-x-0 flex lg:hidden justify-between items-center z-50 px-2 sm:px-6 bg-primary shadow-t-md">
        {navBtns(false)}
      </div>
    </>
  );
}

export default Header;
