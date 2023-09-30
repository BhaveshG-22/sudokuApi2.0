const express = require("express");
const app = express();
const sudoku = require("sudoku");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  try {
    var puzzle = sudoku.makepuzzle();
    res.send(puzzle);
  } catch (error) {
    console.error("Error generating puzzle:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 2006;

app.listen(PORT, () => {
  console.log(`Server Listening on PORT ${PORT}`);
});
