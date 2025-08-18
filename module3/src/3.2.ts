{
    // 

    // OOP - inheritance
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleepTime(numOfHours: number) {
            console.log(`${this.name} sleeps ${numOfHours} hours.`);
        }
    }










    class Student extends Person {
      

        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
        getSleepTime(numOfHours: number) {
            console.log(`${this.name} sleeps ${numOfHours} hours.`);
        }
    }

    const student = new Student("John", 20, "USA");

    student.
















    class Teacher extends Person {
       
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }
      
        takeClass(numOfClasses: number) {
            console.log(`${this.name} takes ${numOfClasses} classes.`);
        }
    }
    const teacher = new Teacher("John", 20, "USA", "Professor");

    teacher.


    // 
}