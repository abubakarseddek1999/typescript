{
    // 

    // Union type
    type Student = {
        name: "abubakar" | "abdullah" | "muhammad" | "ahmed",
        age: number,
        gender: string,
        hobby: string,
    }


    const student1: Student = {
        name: 'abubakar',
        age: 25,
        gender: 'male',
        hobby: 'coding',
    };

    const student2: Student = {
        name: 'abdullah',
        age: 26,
        gender: 'male',
        hobby: 'coding',
    };





    // intersection type
    type Student1 = {
        name: "abubakar" | "abdullah" | "muhammad" | "ahmed",
        age: number,
        gender: string,
        hobby1: string,
    }

    type Student2 = {
        name: "abubakar" | "abdullah" | "muhammad" | "ahmed",
        age: number,
        gender: string,
        hobby2: string,
    }

    const student3: Student1 & Student2 = {
        name: 'abdullah',
        age: 26,
        gender: 'male',
        hobby1: 'coding',
        hobby2: 'reading',
    };










    // 
}