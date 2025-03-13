import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container mt-5 text-center">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary">Return to Home</Link>
        </div>
    );
}

export default NotFound;
