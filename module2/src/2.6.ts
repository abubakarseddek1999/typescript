{
    // 
    // constraints
    const addCourseToStudent = <T extends { id: number, name: string, age: number }>(student: T): T => {
        const course = "Next level web development";
        return {
            ...student,
            course,
        };
    }
    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        age: number;
    }>({
        id: 1,
        name: "John",
        age: 20,
    });

    const student2 = addCourseToStudent({
        id: 2,
        name: "John",
        age: 20,

    });
    const student3 = addCourseToStudent({
        id: 3,
        name: "Doe",
        age: 22,
    });







    // 
}