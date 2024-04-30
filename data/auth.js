let users = [
    {
        id: '1',
        username: "apple",
        password: "$2b$10$8BveypaYUdyY1m/C5ls.UeDSDfft6vNalPsVIt3TdpTIbkqFMopq.",
        name: "김사과",
        email: "apple@apple.com",
        url: "https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45.jpg"
    },
    {
        id: '2',
        username: "banana",
        password: "2222",
        name: "반하나",
        email: "banana@banana.com",
        url: "https://img.freepik.com/premium-vector/banana-cute-kawaii-style-fruit-character-vector-illustration_787461-1772.jpg"
    }
]

export async function createUser(username, password, name, email){
    const user ={
        id: "10",
        username,
        password,
        name,
        email,
        url: "https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45.jpg"
    }
    users = [user, ...users]
    return users;
}


export async function login(username){
    return users.find((users) => users.username === username);
}