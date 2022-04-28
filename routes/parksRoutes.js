import express from "express";
const router = express.Router();
const fs = require("fs");

// Apply Middleware to Specific Routes
router.use((_req, _res, next) => {
    console.log("Incoming Route!");

    next();
});

function readParks() {
    const parksData = fs.readFileSync("./data/parksData.json");
    const parsedParksData = JSON.parse(parksData);
    return parsedParksData;
}

router.get("/", (_req, res) => {
    const parks = readParks();
    res.status(200).json(parks);
})

module.exports = router;