const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(PORT, (req, res) => {
	console.log(`Server is running on port ${PORT}`);
});
