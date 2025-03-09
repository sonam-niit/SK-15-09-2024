function Project() {
    const projects=[
        {id:1,name:"Quiz APP",tech:"HTML, CSS, Javascript",marks:"9"},
        {id:2,name:"Quora APP",tech:"HTML, CSS, Javascript",marks:"9.3"},
        {id:3,name:"LinkedIn APP",tech:"HTML, CSS, Javascript",marks:"8.6"},
    ]
    return ( 
        <div>
            <h3>Projects</h3>
            {
                projects.map(project=>(
                    <div key={project.id}>
                        <h4>{project.name}</h4>
                        <h5>Techonlogy Used: {project.tech}</h5>
                        <p>Result: {project.marks}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default Project;