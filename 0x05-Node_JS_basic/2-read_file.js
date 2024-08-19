/**
 * Opens a file and retrieve some data from it.
 * @param {File} file The path to the file.
 */
const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, 'utf-8').trim().split('\n');
    data.splice(0, 1);
    let totalStudents = 0;
    const subjects = {};

    data.forEach((element) => {
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
