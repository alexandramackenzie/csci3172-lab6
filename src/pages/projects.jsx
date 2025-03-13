function Projects() {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">My Projects</h1>

            <div className="card mb-4">
                <div className="card-body">
                    <h3 className="card-title">DPL Studios: Unity-based Game Development</h3>
                    <p className="card-text">
                        <strong>About the Project:</strong> This project was a Unity-based computer game designed to teach teens about safe dating habits.
                    </p>
                    <p><strong>Technologies Used:</strong> Unity, Blender</p>
                    <p><strong>My Role:</strong> Junior Developer - Designed and implemented UI/UX and game play functinality</p>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h3 className="card-title">ChemAR: Augmented Reality Website</h3>
                    <p className="card-text">
                        <strong>About the Project:</strong> Website designed to save, render, and display 3D chemistry models in Augmented Reality.
                    </p>
                    <p><strong>Technologies Used:</strong> Javascript, Node, AzureDB</p>
                    <p><strong>My Role:</strong> Senior Developer - Developed GLB/GLTF file support and multi-user functionality.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
