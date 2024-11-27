"use client";

import React from 'react';
import Link from 'next/link';
import AuthButton from '../components/authbutton';
import { SessionProvider } from 'next-auth/react';
// import styles from '../styles/header.module.css';

const Webheader: React.FC = () => {
  return (
    <header>
        <nav className="bg-white mx-auto flex w-full items-center justify-between px-8 py-5 lg:px-8 overflow-hidden shadow-md">
          <div className="justify-start flex w-24">
            <Link href="/" className="flex gap-[1px] items-center font-bold">
              <img className="h-8 w-8" src="../imgs/icon.ico" alt="Dahl Logo"></img>
              {/* <div>ahl Lab</div> */}
            </Link>
          </div>
          
          <ul className="justify-center list-none flex gap-[30px] xs:gap-[10px]">
            <li><Link href="/p/research" className="text-black no-underline font-bold hover:underline xs:text-xs">Research</Link></li>
            <li><Link href="/p/publications" className="text-black no-underline font-bold hover:underline xs:text-xs">Publications</Link></li>
            <li><Link href="/p/staff" className="text-black no-underline font-bold hover:underline xs:text-xs">Staff</Link></li>
            <li><Link href="/p/courses" className="text-black no-underline font-bold hover:underline xs:text-xs">Courses</Link></li>
            <li><Link href="/p/apply" className="text-black no-underline font-bold hover:underline xs:text-xs">Apply</Link></li>
          </ul>
          
          <div className="flex justify-end pr-2 h-8 w-24 items-center font-bold text-black">
            <SessionProvider>
              <AuthButton></AuthButton>
            </SessionProvider>
          </div>
        </nav>
    </header>
  );
};  

export default Webheader;