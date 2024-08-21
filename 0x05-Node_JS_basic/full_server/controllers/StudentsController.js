// full_server/controllers/StudentsController.js

const readDatabase = require('../utils').readDatabase;

class StudentsController {

    // Method to get all students grouped by their field
    static async getAllStudents(req, res) {
        try {
            const students = process.argv.length > 2 ? process.argv[2] : '';

            const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

            let responseText = 'This is the list of our students\n';
            fields.forEach((field) => {
                const studentList = students[field];
                responseText += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
            });

            res.status(200).send(responseText.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    // Method to get all students by a specific major (CS or SWE)
    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const dataPath = process.argv.length > 2 ? process.argv[2] : '';
            const students = await readDatabase(dataPath);
            const studentList = students[major];

            if (studentList) {
                res.status(200).send(`List: ${studentList.join(', ')}`);
            } else {
                res.status(200).send('List: ');
            }
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
