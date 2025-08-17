{
    // utility types
    // pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        phone: string;
    };

    type pickNameAge = Pick<Person, "name" | "age">;





    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;



    // required
    type PersonRequired = Required<Person>;

    // Partial
    type PersonPartial = Partial<Person>;

    // Readonly
     type PersonReadonly = Readonly<Person>;
     person.name = "John"; // Error: Cannot assign to 'name' because it is a read-only property.

     // Record
     type PersonRecord = Record<string, string>;
     const personRecord: PersonRecord = {
        name: "John",
        age: 30,
        email: "john@gmail.com",
        phone: "1234567890",
      };




    // 
}