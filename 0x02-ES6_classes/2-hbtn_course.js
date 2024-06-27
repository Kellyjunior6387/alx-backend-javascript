export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validate(name, 'Name', 'string');
    this._length = this.validate(length, 'Length', 'number');
    this._students = this.validate(students, 'Students', 'array');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validate(newName, 'name', 'string');
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validate(newLength, 'length', 'number');
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validate(newStudents, 'students', 'array');
  }

  // Validation methods
  static validate(arg, attributeName, type) {
    if (type === 'array') {
      if (!Array.isArray(arg) || !arg.every((item) => typeof item === 'string')) {
        throw new TypeError(`${attributeName} must be an array of strings`);
      }
    } else if (typeof arg !== type) {
      throw new TypeError(`${attributeName} must be a ${type}`);
    }
    return arg;
  }
}
