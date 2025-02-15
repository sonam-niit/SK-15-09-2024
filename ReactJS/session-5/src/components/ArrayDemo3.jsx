function ArrayDemo3() {
    const users = [
        { id: 1, name: 'John', age: 16 },
        { id: 2, name: 'Emma', age: 22 },
        { id: 3, name: 'David', age: 19 },
        { id: 4, name: 'Jack', age: 23 },
        { id: 5, name: 'Chris', age: 15 },
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Adult Users</h3>
                    <ul className="list-group">
                        {
                            users.filter(user => user.age >= 18)
                                .map(user => (<li key={user.id} className="list-group-item">
                                    {user.name} Age:{user.age}</li>))
                        }
                    </ul>
                </div>
                <div className="col">
                    <h3>children</h3>
                    <ul className="list-group">
                        {
                            users.filter(user => user.age < 18)
                                .map(user => (<li key={user.id} className="list-group-item">
                                    {user.name} Age:{user.age}</li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ArrayDemo3;