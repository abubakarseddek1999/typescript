// destructuring
{
    const user = {
        id: 1,
        name: {
            firstName: 'Abubakar',
            lastName: 'Salam',
            age: 25,
            gender: 'male',
            hobby: 'coding',
        },
        address: {
            street: '123 Abubakar',
            city: 'Abubakar',
            country: 'Indonesia',
        },
        phone: {
            mobile: '08123456789',
            home: '08123456789',
            office: '08123456789',
        }
    }

    const {
        id,
        name: {
            age,
        },
    } = user

    // array destructuring
    const myFriends = ['Abubakar', 'Abdullah', 'Muhammad', 'Ahmed'];

    const [a, b, c, bestfriend, ...rest] = myFriends;





















}