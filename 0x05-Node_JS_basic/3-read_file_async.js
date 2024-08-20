/**
 * Opens a file and retrieve some data from it.
 * @param {File} file The path to the file.
 */
const fs = require('fs');

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const cleanedData = data.trim().split('\n');
      cleanedData.splice(0, 1);
      let totalStudents = 0;
      const subjects = {};

      cleanedData.forEach((element) => {
        const line = element.split(',');
        if (!subjects[line[3]]) {
          subjects[line[3]] = [];
        }
        subjects[line[3]].push(line[1]);
        totalStudents += 1;
      });
      console.log(`Number of students: ${totalStudents}`);
      for (const [fields, students] of Object.entries(subjects)) {
        console.log(`Number of students in ${fields}: ${students.length}. List: ${students.join(', ')}`);
      }
      resolve(true);
    }
  });
});
module.exports = countStudents;
