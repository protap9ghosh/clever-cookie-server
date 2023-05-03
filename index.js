const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


const chefDetails = require("./data/chef-details.json");
const recipe = require("./data/recipe.json");

app.use(cors());

app.get('/', (req, res)=> {
    res.send("Clever Cookie is running...");
});

app.get("/chef-details", (req, res) => { 
    res.send(chefDetails);
})

app.get("/recipe", (req, res) => {
    res.send(recipe);
})



app.listen(port, () => {
    console.log(`Clever Cookie is running on port: ${port}`);
});