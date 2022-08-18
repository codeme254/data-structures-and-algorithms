// es2015 classes

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Sample instance method: Each objec calling this method will get a different output
  fullName() {
    return `The full name of ${this.firstName} is ${this.firstName} ${this.lastName}`;
  }

  // Sample static method: methods that are permanent to classes and not just necessarily individual instance/object
  static printTwoStudents(std1, std2) {
    console.log(
      `Both ${std1.firstName} and ${std2.firstName} are students of this school.`
    );
  }
}

let zaph = new Student("zaphenath", "paneah");
console.log(zaph.firstName, zaph.lastName);
console.log(zaph.fullName());

let jane = new Student("Jane", "doe");
console.log(jane.firstName, jane.lastName);
console.log(jane.fullName());

// calling our static method
Student.printTwoStudents(zaph, jane);
