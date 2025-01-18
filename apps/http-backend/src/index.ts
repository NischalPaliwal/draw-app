import express from "express";

const app = express();

const PORT = 7890;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})