import express from "express";
import Cors from "cors";
import fs from "fs";

// App config.
const app = express();
app.use(express.json());
app.use(Cors());

// Setting the Port.
const port = process.env.PORT || 5000;

// Read the data file.
var allFacts;
const readDataFile = async () => {
    const data = await fs.readFile('./data.json', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            allFacts = JSON.parse(data);
        }
    });
}
await readDataFile();

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Get all. 
app.get("/api/v1/resources/dogs", (req, res) => {

    // Check the params for the number of facts requested by the user.
    if (req.query.number) {
        let number = req.query.number;
        if (allFacts.length - 1 < number) {
            number = allFacts.keys.length - 1;
        }

        // Shuffle the array to achieve randomness and then slice the first `number` of elements.
        const copyOfAllFacts = [...allFacts];
        shuffleArray(copyOfAllFacts)
        res.status(200).send(copyOfAllFacts.slice(0, number));
    }

    // Else if the request params don't contain the number of facts to be returned, return all the facts.
    else {
        // Grab `number` random facts.
        res.status(200).send(allFacts);
    }
});

// Listener.
app.listen(port, "0.0.0.0", () => {
    console.log(`Listening on port: ${port}`);
});