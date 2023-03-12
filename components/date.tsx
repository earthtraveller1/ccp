import React from 'react';
import styles from './date.module.css';

export default function Datetime() {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let format = (n: string | number) => {
        return ("00" + n).slice(-2);
    }

    let [year, setYear] = React.useState(1000);
    let [month, setMonth] = React.useState("January");
    let [day, setDay] = React.useState(1);
    let [hour, setHour] = React.useState(0)
    let [minute, setMinute] = React.useState(0);
    let [second, setSecond] = React.useState(0);

    React.useEffect(() => {
        const f = setInterval(() => {
            let now = new Date();
            setYear(now.getFullYear());
            setMonth(months[now.getMonth()]);
            setDay(now.getDate());
            setHour(now.getHours());
            setMinute(now.getMinutes());
            setSecond(now.getSeconds());
        }, 1000);

        return () => clearInterval(f);
    }, []);

    return (
        <>
            <p className={styles.inline}>{day} {month}, {year} {format(hour)}:{format(minute)}:{format(second)}</p>
        </>
    );
}