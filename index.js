const express = require('express');
const cors = require("cors");
const app = express();
const parksRoutes = require("./routes/parks");


// Configuration 
const env = require("dotenv"); 
const PORT = process.env.PORT || 8080

// Invoke cors middleware to allow requests from the browser
app.use(cors());
app.use(express.json());


// Define middleware 
app.use((req, res, next) => {
    console.log("Incoming Request !!!");

    // next() to move on to next middleware
    next();
})

app.get("/", (req, res)=> {
    res.send("Welcome to Nick's & Colton's API XDD");
});

// Middleware: Routes to 
app.use("/parks", parksRoutes);

// Start Server
app.listen(PORT, () => {
    console.log("App is running at port" + PORT)
});
