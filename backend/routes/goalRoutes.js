const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({ message: "GET Goals" });
});

router.get("/:id", (req, res) => {
	res.status(200).json({ message: `GET Goal #${req.params.id}` });
});

router.post("/", (req, res) => {
	res.status(200).json({ message: "POST / SET Goals" });
});

router.put("/:id", (req, res) => {
	res.status(200).json({ message: `UPDATE Goal  #${req.params.id}` });
});

router.delete("/:id", (req, res) => {
	res.status(200).json({ message: `DELETE Goal #${req.params.id}` });
});

// ignore for now

module.exports = router;
