import express from "express";
import students from "./data/students.json" with { type: "json" };

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const initialLength = students.length;

  students = students.filter((s) => s.id !== studentId);

  if (students.length === initialLength) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({ message: `Student ID ${studentId} deleted.` });
});

app.listen(PORT, () => {
  console.log(`CRUD server running at http://localhost:${PORT}`);
});
