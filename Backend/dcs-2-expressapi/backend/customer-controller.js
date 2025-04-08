import storage from 'node-persist'
export const addCustomer = async (req, res) => {
    const { id, name, email, password } = req.body

    const resp = await storage.setItem(id, { id, name, email, password })
    res.status(201).send({ message: "Customer Added", resp })
}

export const getAllCustomers = async (req, res) => {
    const resp = await storage.values()
    res.send(resp)
}

export const getCustById = async (req, res) => {
    const id = req.params.id;
    const resp = await storage.getItem(id);
    if (resp)
        return res.send(resp) //by default status is 200
    return res.status(404).send({ message: "Customer Not Found" })
}

export const updateCustById = async (req,res)=>{
    const id = req.params.id;
    const found = await storage.getItem(id);
    if (found){
        found.name = req.body.name;
        const resp = await storage.setItem(id,found)
        return res.send({message:'Customer Updated',resp})
    }
    return res.status(404).send({ message: "Customer Not Found to update" })
}
export const deleteCustById = async (req,res)=>{
    const id = req.params.id;
    const found = await storage.getItem(id);
    if (found){
        await storage.removeItem(id);
        return res.send({message:'Customer Deleted'})
    }
    return res.status(404).send({ message: "Customer Not Found to update" })
}