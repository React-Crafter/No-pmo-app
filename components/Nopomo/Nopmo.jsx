import React, { useState } from 'react'

function Nopmo() {
    const saveDay = JSON.parse(localStorage.getItem('day'))

    const [day, setDay] = useState(saveDay);
    const [task, setTask] = useState(10)
    const [lv, setLv] = useState(0)
    
    if (day == null) {
        setDay(0)
    }

    const reaset = () => {
        setDay(0);
        setTask(10);
        setLv(0);
    }

    const next = () => {
        setDay(day + 1);
    }
    if (day >= task) {
        setTask(task * 2)
        setLv(lv + 1)
    }

    localStorage.setItem('lv', JSON.stringify(lv))
    localStorage.setItem('task', JSON.stringify(task))
    localStorage.setItem('day', JSON.stringify(day))
    return (
        <div className='Nopmo'>
            <h1> Start Your Jearny Now  </h1>
            <h2> lv: {lv} </h2>
            <h2 className='day'> {day} / {task} </h2>
            <button onClick={reaset}> Reset </button>
            <button onClick={next}> Next </button>
        </div>
    )
}

export default Nopmo