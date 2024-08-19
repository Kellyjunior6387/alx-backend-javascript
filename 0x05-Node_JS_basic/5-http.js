const http = require('http');
const fs = require('fs');

const port = 1245;
const host = '127.0.0.1';

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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const path = process.argv[2];
    res.write('This is the list of our students\n');
    countStudents(path)
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((err) => {
        res.end(`${err.message} \n`);
      });
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 400;
    res.write('Not Found');
    res.end();
  }
  /*
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(req.url)
    res.end() */
});
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
module.exports = app;
