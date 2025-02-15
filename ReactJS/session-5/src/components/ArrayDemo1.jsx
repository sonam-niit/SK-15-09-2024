function ArrayDemo1() {
    const array=[1,2,3,4,5,6,7,8,9]
    const users=[
        {id:1,name:"alex",email:"alex@gmail.com"},
        {id:2,name:"bob",email:"bob@gmail.com"},
        {id:3,name:"catty",email:"catty@gmail.com"},
        {id:4,name:"Devid",email:"devid@gmail.com"},
    ]
    return ( 
        <div className="container">
            <p>Simple Array: {array}</p>
            <table className="table table-bordered table-striped">
                <thead><tr><th>ID</th><th>Name</th><th>Email</th></tr></thead>
                <tbody>
                    {
                        users.map(user=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
     );
}

export default ArrayDemo1;