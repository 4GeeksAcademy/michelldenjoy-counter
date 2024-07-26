import React, { useState, useEffect } from 'react';

function SimpleCounter() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((numero) => numero + 1); //de donde salen estos dos parametros y por que los tengo que poner para que se ejecuten?
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-black text-white d-flex w-50 justify-content-center p-2 m-1'>
            <i className='far fa-clock fa-2x five bg-dark m-1 p-3 rounded-1'></i>
            <div className='bg-dark m-1 p-3 rounded-1 fs-4 text'>0</div>
            <div className='bg-dark m-1 p-3 rounded-1 fs-4'>0</div>
            <div className='bg-dark m-1 p-3 rounded-1 fs-4'>0</div>
            <div className='bg-dark m-1 p-3 rounded-1 fs-4'>{seconds}</div>
        </div>
    );
};
export default SimpleCounter;
