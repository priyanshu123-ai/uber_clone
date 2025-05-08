const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello Rider</h1>");
});

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});