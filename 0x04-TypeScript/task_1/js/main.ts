interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

//   const teacher1: Teacher = {
//     firstName: 'Lawrence',
//     fullTimeEmployee: true,
//     lastName: 'Ikhidero',
//     location: 'Niger Delta, Nigeria',
//   };

//   const teacher3: Teacher = {
//     firstName: 'James',
//     fullTimeEmployee: false,
//     lastName: 'Smith',
//     location: 'Lagos',
//     contract: false,
//   };

//   console.log(teacher1);
//   console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

//   const director1: Directors = {
//     firstName: 'Erwin',
//     lastName: 'Smith',
//     location: 'Paradis Island',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
//   };

//   console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("GNU-Linux", "Person")); // logs 'G. Person'

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
 
  interface StudentClassConstructorInterface {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const student1: StudentClass = new StudentClass("John", "Doe");
  
  console.log(student1.displayName());
  console.log(student1.workOnHomework());
