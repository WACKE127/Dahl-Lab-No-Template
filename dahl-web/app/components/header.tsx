import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Webheader: React.FC = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/publications">Publications</Link></li>
            <li><Link href="/staff">Staff</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/apply">Apply</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Webheader;