function About() {
    const skills = ["JavaScript", "React", "SQL", "Java", "Python", "PHP", "Unity"];

    return (
        <div className="container mt-5">
            <h1>About Me</h1>
            <p>I am a current Applied Computer Science student at Dalhousie University with a passion for web development.</p>
            
            <h3 className="mt-4">Education</h3>
            <ul className="list-group mt-3">
                <li className="list-group-item">Dalhousie University - Medical Sciences (2016-2020)</li>
                <li className="list-group-item">Dalhousie University - Applied Computer Science (2023-2025)</li>
            </ul>
            
            <h3 className="mt-4">Experience</h3>
            <ul className="list-group mt-3">
                <li className="list-group-item">Senior Residence Programming Assistant, Dalhousie University (2018-2020)</li>
                <li className="list-group-item">Marketing and Events Coordinator, IGNITE (2021-present)</li>
            </ul>
            
            <h3 className="mt-4">Technical Skills</h3>
            <ul className="list-group mt-3 mb-5">
                {skills.map((skill, index) => (
                    <li key={index} className="list-group-item">
                        <i className="bi bi-check-circle text-success me-2"></i> {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default About;

