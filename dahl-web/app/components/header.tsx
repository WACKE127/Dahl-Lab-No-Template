import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Webheader: React.FC = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/p/research">Research</Link></li>
            <li><Link href="/p/publications">Publications</Link></li>
            <li><Link href="/p/staff">Staff</Link></li>
            <li><Link href="/p/courses">Courses</Link></li>
            <li><Link href="/p/apply">Apply</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Webheader;