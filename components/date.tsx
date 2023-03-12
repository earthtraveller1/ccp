import React from 'react';

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
let [datetime, setDatetime] = React.useState(`${day} ${month}, ${year} ${format(hour)}:${format(minute)}:${format(second)}`);

React.useEffect(
    () => {
        let update = () => {
            let now = new Date();
            // year = now.getFullYear();
            // month = months[now.getMonth()]
            // day = now.getDate();
            // hour = now.getHours();
            // minute = now.getMinutes();
            // second = now.getSeconds();
            // 
            // let datetime = `${day} ${month}, ${year} ${format(hour)}:${format(minute)}:${format(second)}`;
            setYear(now.getFullYear());
            setMonth(months[now.getMonth()])
            setDay(now.getDate());
            setHour(now.getHours());
            setMinute(now.getMinutes());
            setSecond(now.getSeconds());
            
            setDatetime(`${day} ${month}, ${year} ${format(hour)}:${format(minute)}:${format(second)}`);
        }
        
        const f = setInterval(() => {
            update();
        }, 1000);

        return () => clearInterval(f);
    }, [])

    return (
        <>
            <p>{datetime}</p>
        </>
    );
}