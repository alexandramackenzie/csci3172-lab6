import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <img 
                        src="/img/headshot.png"
                        alt="My Headshot" 
                        className="img-fluid"
                        style={{ maxWidth: "300px" }} 
                    />
                </div>

                <div className="col-md-8 text-center text-md-start">
                    <h1 className="mb-3">Welcome to My Portfolio</h1>
                    <p className="lead">I am a current Applied Computer Science student at Dalhousie University with a passione for web development.</p>

                    <h3 className="mt-4">What You'll Find Here:</h3>
                    <ul className="list-group list-group-flush d-inline-block text-start mt-3">
                        <li className="list-group-item"><strong>Projects</strong> - What I've worked on</li>
                        <li className="list-group-item"><strong>About</strong> - My skills and experience</li>
                    </ul>

                    <div className="mt-4">
                        <Link to="/projects" className="btn btn-primary me-2">View My Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

