const express = require("express");
const app = express();
const sudoku = require("sudoku");

app.get("/", (req, res) => {
  var puzzle = sudoku.makepuzzle();

  res.send(puzzle);
});

app.listen("2006", () => {
  console.log("Server Listening on PORT 2006");
});
