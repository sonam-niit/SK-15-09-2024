function ArrayDemo2() {
    const genders = ["Male", "Female", "Other"]
    const skills = ["HTML", "CSS", "JavaScript", "React"]
    return (
        <div className="mt-3 container">
            <div>
                Gender:
                {
                    genders.map(gender => (
                        <div class="form-check d-inline-block ms-3" key={gender} >
                            <input class="form-check-input" type="radio" name="gender" value={gender} />
                            <label class="form-check-label" >
                                {gender}
                            </label>
                        </div>
                    ))
                }
            </div>
            <div>
                Select Your Skills:
                {
                    skills.map(skill => (
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value={skill} />
                                <label class="form-check-label">
                                    {skill}
                                </label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ArrayDemo2;