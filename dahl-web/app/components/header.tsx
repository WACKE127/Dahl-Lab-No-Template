"use client";

import React from 'react';
import Link from 'next/link';
import AuthButton from '../components/authbutton';
import { SessionProvider } from 'next-auth/react';
// import styles from '../styles/header.module.css';

const Webheader: React.FC = () => {
  return (
    <header className="bg-black py-[15px] w-[100%] min-h-[54px] max-h-[54px] overflow-hidden">
      <nav className="flex justify-center">
        <ul className="list-none flex gap-[30px] xs:gap-[10px]">
          <li><Link href="/" className="text-white no-underline font-bold hover:underline xs:text-xs">Home</Link></li>
          <li><Link href="/p/research" className="text-white no-underline font-bold hover:underline xs:text-xs">Research</Link></li>
          <li><Link href="/p/publications" className="text-white no-underline font-bold hover:underline xs:text-xs">Publications</Link></li>
          <li><Link href="/p/staff" className="text-white no-underline font-bold hover:underline xs:text-xs">Staff</Link></li>
          <li><Link href="/p/courses" className="text-white no-underline font-bold hover:underline xs:text-xs">Courses</Link></li>
          <li><Link href="/p/apply" className="text-white no-underline font-bold hover:underline xs:text-xs">Apply</Link></li>
        </ul>
      </nav>
      <div className="absolute left-[80%] top-[6px] flex items-center pr-4">
          <SessionProvider>
            <AuthButton></AuthButton>
          </SessionProvider>
        </div>
    </header>
  );
};  

export default Webheader;