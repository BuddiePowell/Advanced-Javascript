// Name: Buddie Powell
// Date: 04/11/2026
// course: Advanced JavaScript hybrid monday/wednesday 10:30am-12:10pm

const init = () => {
  // this is the Student class which has a constructor that takes in the
  // first name, last name, and email
  // of the student and assigns them to private properties
  class Student {
    constructor(firstName, lastName, email) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._email = email;
    }

    // these are the getters and setters for the first name property
    get firstName() {
      return this._firstName;
    }
    set firstName(value) {
      this._firstName = value;
    }
    // these are the getters and setters for the last name property
    get lastName() {
      return this._lastName;
    }
    set lastName(value) {
      this._lastName = value;
    }
    // these are the getters and setters for the email property
    get email() {
      return this._email;
    }
    set email(value) {
      this._email = value;
    }

    // Print student details method which prints the student's full name and email to the console
    printDetails() {
      console.log(`Name: ${this.firstName} ${this.lastName}`);
      console.log(`Email: ${this.email}`);
    }

    // this is a Static register method which takes in a course name and prints it to the console
    static register(courseName) {
      console.log(`Course the students are registering for is: ${courseName}`);
    }
  }

  // these variables create two instances of the Student class with
  // different first names, last names, and email addresses
  const student1 = new Student("Buddie", "Powell", "bpowell5@gmail.com");
  const student2 = new Student("Max", "Magee", "mmagee@aol.com");

  console.log("Student 1 details:");
  student1.printDetails();

  console.log("Student 2 details:");
  student2.printDetails();

  // this calls the static register method of the Student class with
  // the course name it will print the course name to the console
  Student.register("Advanced JavaScript");
};

// calls the init function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", init);
