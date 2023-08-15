import Image from 'next/image';
import React from 'react';
import jsBook from "../../public/js-book.jpg";

const page = () => {
    return (
        <section>
            book

            <Image
                src={jsBook}
                alt="Picture of the author"
            // width={500}
            // height={500}
            />
        </section>
    );
};

export default page;