import Link from "next/link";

const Header = () => {
    return (
        <>
            <Link className="me-5" href="/">Home</Link>
            <Link className="me-5" href="/book">Book</Link>
            <Link className="me-5" href="/blog">Blog</Link>
            <Link className="me-5" href="/info">Info</Link>
        </>
    );
};

export default Header;