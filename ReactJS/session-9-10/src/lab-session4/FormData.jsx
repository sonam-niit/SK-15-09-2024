import { useState } from "react";

function FormData() {
    const [country, setCountry] = useState('INDIA');
    const [selectedLang,setSelectedLang]= useState({
        eng:false,hindi:false,tamil:false,marathi:false
    })
    const [gender,setGender]=useState('')

    const handleChange=(e)=>{
        // const {name,checked}= e.target; //Destructing
        const name=e.target.name;
        const checked=e.target.checked;
        setSelectedLang(prev=>({...prev,[name]:checked}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(country==''){
            alert('Select your country');return
        }
        console.log(country);
        console.log(selectedLang);
        console.log(gender);
    }
    return (
        <form className="container" onSubmit={handleSubmit}>

            <div className='mb-3'>
                <label className="form-label">Country</label>
                <select className="form-select" aria-label="Default select example"
                    onChange={(e) => setCountry(e.target.value)} value={country}>
                    <option>--Select From Here</option>
                    <option value="india">INDIA</option>
                    <option value="us">US</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <div className='mb-3'>
                <label className="form-label">Languages Known:</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="eng" 
                    onChange={(handleChange)} name='eng' />
                    <label className="form-check-label">English</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="hindi" 
                    onChange={handleChange} name="hindi"/>
                    <label className="form-check-label" >Hindi</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="tamil" 
                    onChange={handleChange} name="tamil"/>
                    <label className="form-check-label" >Tamil</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="marathi" 
                    onChange={handleChange} name="marathi"/>
                    <label className="form-check-label" >Marathi</label>
                </div>
            </div>
            <div className='mb-3'>
                <label className="form-label">Gender:</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="male" 
                    onChange={(e)=>setGender(e.target.value)}/>
                    <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="female" 
                    onChange={(e)=>setGender(e.target.value)}/>
                    <label className="form-check-label">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="other" 
                    onChange={(e)=>setGender(e.target.value)}/>
                    <label className="form-check-label">Other</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Save Data</button>
        </form>
    );
}

export default FormData;