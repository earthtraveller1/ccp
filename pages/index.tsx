// import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Datetime from '../components/date';

export default function Home() {
    return (
        <>
        <header><h1>Communist Party of China</h1></header>
        <main>
            <p className={styles.inline}>Current date and time: </p><Datetime/>
        </main>
        </>
    );
}
