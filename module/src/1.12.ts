{
    // 
    // nullable type
    const searchName = (name: string | null) => {
        if (name) {
            console.log(`Searching for ${name}`);
        } else {
            console.log("Name is not provided");
        }
    }
    searchName(null);


    // unknown type
    const processInput = (input: unknown) => {
        if (typeof input === 'string') {
            console.log(`Processing string: ${input}`);
        } else if (typeof input === 'number') {
            console.log(`Processing number: ${input}`);
        } else {
            console.log("Unknown type");
        }
    }
    processInput("Hello");
    processInput(123);
    processInput(true);



    // never type
    const processInput2 = (input: string) => {
        console.log(`Processing input: ${input}`);
        return input;
    }
    processInput2("Hello");


    // 
}