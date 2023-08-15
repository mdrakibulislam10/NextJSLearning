import Link from "next/link";

const Services = ({ id, userId, title, body, content }) => {
    // const Services = ({ element }) => {
    //     const { id, userId, title, body } = element;

    return (
        <article className="mb-10 text-center">
            <h1 className="text-3xl">{title}</h1>
            <p>{content}</p>
            <Link href={`/blogs/${id}`}>
                <button className="btn bg-yellow-600 p-3 rounded">Read More....</button>
            </Link>
        </article>
    );
};

export default Services;