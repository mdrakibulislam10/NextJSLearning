import Services from '../components/Services';

const page = async () => {

    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await fetch("http://localhost:3000/api/dashboard");
    const data = await res.json();

    // console.log(data);

    return (
        <>
            <h1>Info</h1>
            <div>
                {
                    data.map(element =>
                        <Services
                            key={element.id}
                            // element={element} // element = {{element}}
                            {...element}
                        />
                    )}
            </div>
        </>
    );
};

export default page;