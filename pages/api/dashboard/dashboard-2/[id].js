export default function handler(req, res) {
    const { method } = req;
    console.log("method:", method);

    if (method === "GET") {
        res.status(200).json({ name: 'John Doe2' });
        return;
    }
    else if (method === "POST") {
        res.status(200).json({ response: "POST Successful" });
    }
    else {
        res.setHeader("Allow", ["GET", "POST "]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }


}