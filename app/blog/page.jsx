"use client"
import React, { useState } from 'react';
// import "../styles/header-modules.css";
import "@/app/styles/header-modules.css";

const page = () => {
    const [count, setCount] = useState(0);

    const handleIncreases = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };

    return (
        <section>

            <h1>blog</h1>
            <h3>{count}</h3>
            <button onClick={handleIncreases}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>


            {/* <div className='blog'>
                blog page
            </div> */}

            {/* <p className='font-bold italic'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit.
            </p> */}
        </section>
    );
};

export default page;