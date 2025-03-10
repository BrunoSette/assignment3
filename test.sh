#!/bin/bash

echo "Testing GET /students"
curl http://localhost:3000/students
echo -e "\n\n"

echo "Testing POST /students"
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","age":20}' http://localhost:3000/students
echo -e "\n\n"

echo "Testing PUT /students/1"
curl -X PUT -H "Content-Type: application/json" -d '{"name":"John Updated","age":21}' http://localhost:3000/students/1
echo -e "\n\n"

echo "Testing DELETE /students/1"
curl -X DELETE http://localhost:3000/students/1
echo -e "\n\n"

echo "Final GET /students"
curl http://localhost:3000/students 