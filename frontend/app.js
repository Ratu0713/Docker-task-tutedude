
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:5000";

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/submit", async (req, res) => {
    try {
        const { name, age } = req.body;

        const response = await fetch(`${BACKEND_URL}/submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                age: Number(age)
            })
        });

        const result = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(result);
        }

        res.redirect("/success");

    } catch (error) {
        console.error("Backend connection error:", error.message);
        res.status(500).send("Could not connect to Python backend");
    }
});

app.get("/success",(req,res)=>{
    res.render("success");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
