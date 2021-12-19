console.log("hello javascript!")
// alert("hello")

// chap. 1 변수 선언
var name = "scalper"

// for (var i=0; i<10; i++) {
//     var name = "scalper"
//     var engName = 'codeScalper'
// }

console.log(name)

// let, const

// chap. 2 타입형
// String, Number, boolean, null, undefined

const naem = "scalper"
const age = 30
const isMale = true
const isFemael = false
let money = null;
let girlfriend = undefined

// ${} 문자열 삽입

// split
let fruits = "사과, 딸기, 포도, 참외";
fruits = fruits.split(",");

// chap. 3 배열
// array
// isArray() -> 배열인지 true / false
// indexof() -> 배열 순번

// chap. 4 object
const monkey = {
    name:'kiki',
    age: 5,
    weight: 40,
    gender:'male',
    isCute:'ture',
    food:["banana","carrot","potato"],
    home : {
        size:"bug",
        price:4000
    }
}

// JSON.stringify(monkey)

// chap. 5 함수
// function 함수

const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 1000;

function showPrice(price) {
    // console.log(price + loyalty);
    return price + loyalty;
}

showPrice(item1);
showPrice(item2);
showPrice(item3);

// const showPrice = function(price) {
//     return price + loyalty;
// }

// const showPrice = function() {}
// => function
// const showPrice = () => {
//     return price + loyalty
// }

// const showPrice2 = (price) => {
//     console.log(price+loyalty)
// }

// chap. 6 조건문

const animals = [
    {name:'lion', size:'big'},
    {name:'monkey', size:'medium'},
    {name:'dog', size:'small'}
]

const num = "10"

// if (num <= 10) {
//     console.log("10보다 작습니다.")
// } else {
//     console.log("10보다 크거나 같습니다")
// }

// switch

//c chap. 7 반복문

// for (let i =0; i < animals.length; i++) {
//     console.log[animals[i]]
// }

// for (let animal of animals) {
//     console.log(animal)
// }

//while

// chap. 8 상향연산자

const num = 10;
// num > 10 ? true : false

// chap. 9 foreach, map, filter, reduce

const coronaCases = [
    {city:'서울', case:'1000'},
    {city:'대전', case:'500'},
    {city:'대구', case:'300'},
    {city:'부산', case:'100'},
    {city:'광주', case:'50'}
]

// coronaCases.forEach(function(corona, index) {
//     console.log(index)
// })

// map
const coronaCities = coronaCases.map((corona) => {
    return '${corona.city}의 확진자 발생 수는 ${corona.case}';
})

// filter
const dangeroutCity = coronaCases.filter(function (corona, index) {
    return index < 3;    
})

// reduce
const numbers = [10,20,30,40,50]
const totalNumbers = numbers.reduce((acc, cur)=>{
    return acc + cur;
})

const totalCases = coronaCases.reduce((acc, cur)=>{
    return acc + cur.case;
}, 0)

// chap. 10 OOP 객체지향

function Song(singer, title, release) {
    this.singer = singer
    this.title = title
    this.release = release
}

// 인스턴스화
const song1 = new Song("bts","DNA","2017-09-18");
const song2 = new Song("eminem","Love Yourself","2001-05-11");

// class Song {
//     constructor(singer, title, release){
//         this.singer = singer
//         this.title = title
//         this.release = release
//     }
// }

