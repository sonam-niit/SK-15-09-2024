import React from 'react';

class ClassSample extends React.Component{

    constructor(){
        super();
        this.state={name:"Sonam Soni"}
    }
    render(){
        return (
            <div>
                <h3>Hello From class Component</h3>
                <h4>Welcome {this.state.name}</h4>
            </div>
        )
    }
}
export default ClassSample