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


// 모든 트윗을 리턴
export async function getAll(){
    return tweets;
}


// 해당 아이디에 대한 트윗을 리턴
export async function gatAllByUsername(username){
    return tweets.filter((tweet) => tweet.username === username);
}


// 글번호에 대한 트윗을 리턴
export async function gatById(id){
    return tweets.find((tweet) => tweet.id === id);

}


// 트윗을 작성
export async function create(text, name, username){
    const tweet = {
        id: '10',
        text,
        createAt: Date.now().toString(),
        name, // name: name => 키와 변수의 값 이름이 같으면 한번만 써도 된다.
        username
    };
    tweets = [tweet, ...tweets];
    return tweets;
}


// 트윗을 변경
export async function update(id, text){
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        tweet.text = text;
    }
    return tweet;
};



// 트윗을 삭제
export async function remove(id){
    tweets = tweets.filter((tweet) => tweet.id !== id);
};