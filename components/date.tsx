import React from 'react';
import styles from './date.module.css';
import { format } from '../lib/util';

export default function Datetime() {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let [year, setYear] = React.useState(1000);
    let [month, setMonth] = React.useState("January");
    let [day, setDay] = React.useState(1);
    let [hour, setHour] = React.useState(0)
    let [minute, setMinute] = React.useState(0);
    let [second, setSecond] = React.useState(0);

    React.useEffect(() => {
        let update = () => {
            let now = new Date();
            setYear(now.getFullYear());
            setMonth(months[now.getMonth()]);
            setDay(now.getDate());
            setHour(now.getHours());
            setMinute(now.getMinutes());
            setSecond(now.getSeconds());
        };
        update();
        
        const loop = setInterval(update, 1000);
        return () => clearInterval(loop);
    }, []);

    return (
        <>
            <p className={styles.inline}>{day} {month}, {year} {format(hour)}:{format(minute)}:{format(second)}</p>
        </>
    );
}
