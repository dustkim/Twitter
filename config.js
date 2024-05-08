import dotenv from 'dotenv';

dotenv.config();


function required(key, defaultValue=undefined){
    const value = process.env[key] || defaultValue;   
    // or: 앞의 값이 true로 판별되면 앞의 값이 대입되고 값이 false로 판별되면 뒤에 값이 대입됨
    // env에 접근이 가능하게 하는 것 process(env를 다룰 수 있음)
    if(value == null){
        throw new Error(`키 ${key}는 undefined`);
    }
    return value;
}

export const config = {
    jwt: {
        secretkey: required('JWT_SECRET'),
        expiresInSec: parseInt(('JWT_EXPIRES_SEC', 172800))
    },
    bcrypt: {
        saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 10))
    },
    host: {
        port: parseInt(required('HOST_PORT', 8080))
    },
    db: {
        host: required('DB_HOST'),
        user: required('DB_USER'),
        database: required('DB_DATABASE'),
        password: required('DB_PASSWORD'),
        port: required('DB_PORT')
    }
}