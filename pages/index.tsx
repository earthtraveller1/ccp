// import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Datetime from '../components/date';

export default function Home() {
    return (
        <>
            <h1 className={styles.ccpbanner}>Communist Party of China</h1>
            <p className={styles.inline}>The time is: </p><Datetime/>
        </>
    );
}
