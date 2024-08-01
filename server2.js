let express = require('express')
let app = express()
let db = require('./db');

const bodyParser = require('body-parser')
app.use(bodyParser.json());     // req.body

const person = require('./models/Person')
const MenuItem = require('./models/MenuItem')

app.get('/', function(request,response) {
    response.send("Welcome to my hotel... How i can help you ?")
})


// import the route file
const personRoutes = require("d:/Backend/backend1/routes/PersonRoutes")
const menuItemRoutes = require('./routes/menuItemRoutes')

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(6000,() => {
    console.log("Server is created on port no.: 5000");
})



// const express = require('express');

// const bodyParser = require('body-parser');
// const db = require('./db'); // Ensure this is connecting to your database properly
// const personRoutes = require('./routes/PersonRoutes');
// const menuItemRoutes = require('./routes/menuItemRoutes');

// const app = express();
// const PORT = 5000; // Use a constant for the port number

// // Middleware
// app.use(bodyParser.json()); // For parsing application/json

// // Routes
// app.get('/', (req, res) => {
//   res.send("Welcome to my hotel... How can I help you?");
// });

// app.use('/person', personRoutes);
// app.use('/menu', menuItemRoutes);

// // Error handling middleware (optional but recommended)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
