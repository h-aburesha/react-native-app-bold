const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const { PORT = 5001 } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/", (req, res) => {
    res.json({ message: "Hello World from THE BACKEND" });
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});
