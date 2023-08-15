"use client"

import { useState } from "react";

const Input = () => {
    const [bookName, setBookName] = useState("");
    const [bookTopic, setBookTopic] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(bookName);
        console.log(bookTopic);
    };

    return (
        <section>
            <h1>Hello from input</h1>
            <form action="" onSubmit={handleFormSubmit}>
                <label htmlFor="bookName">Book name:</label>
                <br />
                <input type="text" className="border-2" id="bookName" value={bookName} required
                    onChange={(e) => setBookName(e.target.value)}
                />

                <br />

                <label htmlFor="bookTopic">Book topic:</label>
                <br />
                <input type="text" className="border-2" id="bookTopic" value={bookTopic} required
                    onChange={(e) => setBookTopic(e.target.value)}
                />

                <br />

                <input type="submit" className="btn bg-blue-600 p-2 rounded-sm" value="Submit" />
            </form>
        </section>
    );
};

export default Input;