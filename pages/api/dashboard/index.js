// pages/api/posts.js

export default function handler(req, res) {
    // Simulate data or fetch data from a database or external source
    const posts = [
        { id: 1, title: 'First Blog Post', content: 'This is the content of the first post.' },
        { id: 2, title: 'Second Blog Post', content: 'This is the content of the second post.' },
    ];

    res.status(200).json(posts);
}
