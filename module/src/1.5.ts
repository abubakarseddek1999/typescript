// Reference Types --> Object

const user:{
    firstName: string,
   readonly company:'programming hero',
    lastName: string,
    age?: number,
    isStudent: boolean,
    isMale: boolean,
    hobbies: string[],
    address: {
        street: string,
        city: string,
        state: string,
        zipCode: number
    }
} = {
    firstName: 'Abubakar',
    lastName: 'Sadiq',
    company: 'programming hero',
    // age: 25,
    isStudent: true,
    isMale: true,
    hobbies: ['Coding', 'Reading', 'Sports'],
    address: {
        street: '123 Abubakar Road',
        city: 'Abubakar',
        state: 'Lagos',
        zipCode: 12345
    }
};

