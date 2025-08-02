{
    // 
    // generics type


    type genericsArray<T> = Array<T>;

    // const  rollNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rollNumber: genericsArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // const mentors: string[] = ['Abubakar', 'Abdullah', 'Muhammad', 'Ahmed'];
    const mentors: genericsArray<string> = ['Abubakar', 'Abdullah', 'Muhammad', 'Ahmed'];



    const user: genericsArray<{ firstName: string, lastName: string, roll: number }> = [
        {
            firstName: 'Abubakar',
            lastName: 'Salam',
            roll: 25,
        },
        {
            firstName: 'Abdullah',
            lastName: 'Salam',
            roll: 26,
        },
    ]





// generics tuple
type tuple<X, Y> = [X, Y];
const manush: tuple<string, number> = ['Abubakar', 25];








    // 
}