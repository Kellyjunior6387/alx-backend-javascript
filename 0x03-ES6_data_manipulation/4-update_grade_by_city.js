export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      let grade = 'N/A';
      for (const x of grades) {
        if (x.studentId === student.id) {
          grade = x.grade;
          break;
        }
      }
      return { ...student, grade };
    });
}
