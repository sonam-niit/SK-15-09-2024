let users = [];
export const getAllUsers = (req, res) => {
    res.status(200).send(users)
}
export const addUser = (req, res) => {
    const { name, email } = req.user; //data destructuring 
    const user = { id: Date.now(), name, email }
    users.push(user)
    res.status(201).send({ message: 'user created successfully', user })
}
export const getById = (req, res) => {
    const id = req.params.id;
    const data = users.find(item => item.id == id)
    if (data)
        res.status(200).send(data);
    else
        res.status(404).send({ message: 'no user available with this id' })
}

export const updateById = (req, res) => {
    const id = req.params.id;
    const data = users.find(item => item.id == id)
    if (data) {
        data.name = req.body.name;
        return res.status(200).send({ message: "user updated successfully", data });
    }
    res.status(404).send({ message: 'no user available with this id' })
}

export const deleteById = (req, res) => {
    const id = req.params.id;
    const data = users.find(item => item.id == id)
    if (data) {
        users = users.filter(item => item.id != id)
        return res.status(200).send({ message: 'user deleted', data })
    }
    res.status(200).send({ message: `User not found with id ${id}` })
}