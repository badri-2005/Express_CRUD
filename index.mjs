import express from 'express';

const app = express();

// Middleware to Parse JSON Based Bodies

const users = [
    {id:1 , userName : 'Badri'},
    {id:2 , userName : 'Kumar'},
    {id:3 , userName : 'Sankar'},
    {id:4 , userName : 'Muthu'},
    {id:5 , userName : 'Vijay'},
]
app.use(express.json());

const PORT = 3001;

// Routes

// Home Route and Default Route
app.get('/',(req,res)=>{
    res.status(200).send('Home Page');
})

// Get All Users
app.get('/api/users',(req,res)=>{
    res.status(200).send(users);
})

// Get Single User
app.get('/api/users/:id',(req,res)=>{

    const id = parseInt(req.params.id);

    if(isNaN(id))
    {
        return res.status(400).send('Invalid User ID');
    }

    const user = users.find((user)=>user.id===id)
    if(!user)
    {
        return res.status(404).send('User Not Found');
    }
    res.status(200).send(user);
})

// Post User
app.post('/api/users',(req,res)=>{
    console.log(req.body);
    const {body}= req;
    const newUser = {id: users.length+1,...body};
    users.push(newUser);

    res.status(201).send(newUser);
})

app.put('/api/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id))
    {
        return res.status(404).send('Invalid User ID');
    }
    const userIndex = users.findIndex((user)=>user.id===id);

    if(userIndex===-1)
    {
        return res.status(404).send('User Not Found');
    }

    const {body} = req;
    const updateUser = {id,...body};
    users[userIndex] = updateUser;
    res.status(200).send(updateUser);
})

app.patch('/api/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id))
    {
        return res.status(404).send('Invalid User ID');
    }

    const userIndex = users.findIndex((user)=> user.id===id);

    if(userIndex===-1)
    {
        return res.status(404).send('User Not Found');
    }

    const {body} = req;
    users[userIndex] = {...users[userIndex],...body};
    res.status(200).send({user:users[userIndex]});
    
})

// Delete User
app.delete('/api/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id))
    {
        return res.status(404).send('Invalid User ID');
    }

    const userIndex = users.findIndex((user)=> user.id===id);

    if(userIndex===-1)
    {
        return res.status(404).send('User Not Found');
    }

    users.splice(userIndex,1);
    res.status(200).send('User Deleted Successfully');
})

// Creation of Server
app.listen(PORT,()=>{
    console.log('Server is Running on Port',PORT);
})