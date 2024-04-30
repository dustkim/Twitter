import jwt from 'jsonwebtoken';

const secret = 'abcdefg1234%^&*';
const token = jwt.sign(
    {
        id: 'apple',
        isAdmin: false 
    },
    secret,
    { expiresIn: 2 } 
)
console.log(secret);

setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error, decoded);
    });
}, 1000); // expiresIn 시간보다 적어야 나옴. 만약 크면 사라져서 나오지 않는다.
console.log(token);