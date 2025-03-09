function Skills() {
    const skills=[
        {id:1,name:"Frontend",tech:"HTML, CSS, Javascript",rating:"9"},
        {id:2,name:"Backend",tech:"Node Express",rating:"9.3"},
        {id:3,name:"Database",tech:"MongoDB",rating:"8.6"},
    ]
    return ( 
        <div>
            <h3>SKILLS</h3>
            {
                skills.map(skill=>(
                    <div key={skill.id}>
                        <h4>{skill.name}</h4>
                        <h5>Techonlogy: {skill.tech}</h5>
                        <p>Overall Rating: {skill.rating}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default Skills;