const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const cleanedData = data.trim().split('\n');
    cleanedData.splice(0, 1);
    let totalStudents = 0;
    const subjects = {};
    const response = [];

    cleanedData.forEach((element) => {
      const line = element.split(',');
      if (!subjects[line[3]]) {
        subjects[line[3]] = [];
      }
      subjects[line[3]].push(line[1]);
      totalStudents += 1;
    });
    response.push(`Number of students: ${totalStudents}`);
    for (const [fields, students] of Object.entries(subjects)) {
      response.push(`Number of students in ${fields}: ${students.length}. List: ${students.join(', ')}`);
    }
    resolve(response.join('\n'));
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const response = ['This is the list of our students'];
  countStudents(DB_FILE)
    .then((data) => {
      response.push(data);
      const content = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.send(content);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;
