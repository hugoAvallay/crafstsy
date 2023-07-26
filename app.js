const express = require("express");
const path = require("path");

const app = express();
const PORT = 3030;

app.use(express.static('public'));


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views/index.html")));

app.get("/registro", (req, res) => res.sendFile(path.join(__dirname, "views/partials/register.html")));

app.get('/login', (req,res)=> res.sendFile(path.join(__dirname,'views','partials', 'login.html')));



app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));


