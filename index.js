const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res)=> {
    res.send("Clever Cookie is running...");
});

app.listen(port, () => {
    console.log(`Clever Cookie is running on port: ${port}`);
});