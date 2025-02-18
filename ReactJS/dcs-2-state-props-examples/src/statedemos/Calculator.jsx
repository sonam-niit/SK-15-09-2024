import { useState } from "react";

function Calculator() {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [op,setOp]=useState('');
    const [result,setResult]=useState(0);
    const handler=()=>{
        if(op=='+')
            setResult(Number(num1)+Number(num2))
        else if(op=='-')
            setResult(num1-num2);
        else if(op=='*')
            setResult(num1*num2)
        else if(op=='/')
            setResult(num1/num2)
        else
            alert('Choose your Option first')
    }
    return (
        <div className="mt-3">
            <h3 className="text-bg-info text-center p-2">My Calculator</h3>
            <div className="row">
                <div className="col">
                    <input type="number" placeholder="Enter Any number" className="form-control" 
                    value={num1} onChange={(e)=>setNum1(e.target.value)}/>
                </div>
                <div className="col">
                    <select className="form-control" onChange={(e)=>setOp(e.target.value)} >
                        <option>Choose your</option>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                </div>
                <div className="col">
                    <input type="number" placeholder="Enter Any number" className="form-control" 
                    value={num2} onChange={(e)=>setNum2(e.target.value)}/>
                </div>
            </div>
            <button className="btn btn-primary w-100 mt-3" onClick={handler}>Calculate</button>
            <input type="number" readOnly className="form-control mt-3"
            value={result}/>
        </div>
    );
}

export default Calculator;