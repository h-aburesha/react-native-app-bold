const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const { PORT = 5001 } = process.env;

const data = require("./response.json");

console.log(data);

app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/", (req, res) => {
    res.redirect("/data");
});

app.get("/data", (req, res) => {
    console.log("data requested");
    res.json(data);
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});
