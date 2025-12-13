const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;


users=[
{
  id: 1,
  name:"Abhay",
  email:"abhay@qdn.com",
  gender: "M",
  age: 34,
  message: "Show"
},
{
  id: 2,
  name:"amit",
  email:"amit@qdn.com",
  gender: "M",
  age: 34,
  message: "Show"
},
{
  id: 3,
  name:"amit2",
  email:"amit@qdn.com",
  gender: "M",
  age: 34,
  message: "Show"
},
{
  id: 4,
  name:"amit2",
  email:"amit@qdn.com",
  gender: "M",
  age: 34,
  message: "Show"
}


]
// Enable CORS only for Angular app (4200)
app.use(
  cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Middleware to parse JSON
app.use(express.json());

// APIs
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API' });
});

app.post('/api/user', (req, res) => {
  const { name, age } = req.body;
  res.json({ status: 'success', data: { name, age } });
});


app.get('/api/user/:userId', (req, res) => {
  const { userId } = req.params;


  const index=users.findIndex((x)=>x.id==userId);

  if(index>-1){
     res.json({
    status: 'success',
    data: users[index]
  });
  }else {
      res.json({
    status: 'Error',
    message: "User noot found",
    data: null
  });
  }
  // Example: mock user data (normally from DB)
   

 
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
