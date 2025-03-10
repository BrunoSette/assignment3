import express from "express";

import students from "./data/students.json" with { type: "json" };

const app = express();

const PORT = 3000;

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/students`);
});
