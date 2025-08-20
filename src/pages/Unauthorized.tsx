import { Link } from "react-router";

const Unauthorized = () => {
    return (
        <div>
            <h1>You Are Unauthorized</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Unauthorized;