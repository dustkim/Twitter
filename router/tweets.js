import express from 'express';
import * as tweetController from '../controller/tweet.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();


/*
    Post, Put에 text에 대해 빈 문자열을 없애고, 최소 3자 이상 입력해야 데이터를 저장하도록 API에 적용
*/
const validateTweet = [
    body('text').trim().isLength({min:3}).withMessage('최소 3자 이상 입력'), validate
]


let tweets = [
    {
    id: '1',
    text: '안녕하세요',
    createAt: Date.now().toString(),
    name: '김사과',
    username: 'apple',
    url: "https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45.jpg"

    },
    {
        id: '2',
        text: '하이',
        createAt: Date.now().toString(),
        name: '반하나',
        username: 'banana',
        url: "https://img.freepik.com/premium-vector/banana-cute-kawaii-style-fruit-character-vector-illustration_787461-1772.jpg"
    
    },    
];


// 해당 아이디에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets?username=:username

router.get('/', isAuth, tweetController.getTweets);
// (req, res, next) => {
//     const username = req.query.username;
//     const data = username 
//     ? tweets.filter((UserNM) => UserNM.username == username)
//     : tweets;
//     res.status(200).json(data);
// }



// 글 번호에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets/:id

router.get('/:id', isAuth, tweetController.getTweet);
// (req, res, next) => {
//     const id = req.params.id;
//     const tweet = tweets.find((ID) => ID.id === id);
//     if(tweet){
//         res.status(200).json(tweet);
//     }
//     else{
//         res.status(404).json({message: `${id}의 트윗이 없습니다.`})
//     }
// };



// 트윗하기
// POST
// http://localhost:8080/tweets
// name, username, text
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력

router.post('/', validateTweet, isAuth, tweetController.createTweet);
// (req, res, next) => {
//     const { text, name, username } = req.body;
//     const tweet = {
//         id: '10',
//         text: text,
//         createAt: Date.now().toString(),
//         name: name,
//         username: username,
//         url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45.jpg'
//     };
//     tweets = [tweet, ...tweets];
//     res.status(201).json(tweets);
// };



// 트윗 수정하기
// PUT
// http://localhost:8080/tweets/:id
// id, username, text
// json 형태로 입력 후 변경된 데이터까지 모두 json으로 출력

router.put('/:id', validateTweet, isAuth, tweetController.updateTweet);
(req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        tweet.text = text;
        res.status(201).json(tweet);
    }
    else{
        res.status(404).json({message: `${id}의 트윗이 없습니다.`})
    }
};



// 트윗 삭제하기
// DELETE
// http://localhost:8080/tweets/:id

router.delete('/:id', isAuth, tweetController.deleteTweet);
(req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter((tweet) => tweet.id !== id);
    res.sendStatus(204);
};



export default router;