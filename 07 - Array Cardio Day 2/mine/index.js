const songs = [
    { songName: 'Yummy', singer: 'Justin Biber', releaseYear: 2020, nationality: 'Canada' },
    { songName: 'Travel', singer: 'Mamamoo', releaseYear: 2020, nationality: 'Korea' },
    { songName: 'Say So', singer: 'Doja Cat', releaseYear: 2020, nationality: 'USA' },
    { songName: '練習一個人生活 Loner’s Courage', singer: '南西肯恩 Neci Ken', releaseYear: 2020, nationality: 'Taiwan' },
    { songName: '帶我去找夜生活 Night life.Take us to the light', singer: '告五人 Accusefive', releaseYear: 2020, nationality: 'Taiwan' },
    { songName: 'Mojito', singer: '周杰倫 Jay Chou', releaseYear: 2020, nationality: 'Taiwan' },
    { songName: '山上拉釘人 Urban Latino', singer: 'BOXING樂團', releaseYear: 2014, nationality: 'Taiwan' },
    { songName: '嗚哇嗚U WA U', singer: 'Matzka Feat. A-Lin', releaseYear: 2015, nationality: 'Taiwan' },
    { songName: 'Eight', singer: 'IU', releaseYear: 2020, nationality: 'Korea' },
    { songName: 'This is Love', singer: 'Super Junior', releaseYear: 2014, nationality: 'Korea' }
]

const menu = [
    { name: 'beef noode', text: 'good', id: 0001 },
    { name: 'fried chicken', text: 'so so ', id: 0006 },
    { name: 'fruit', text: 'healthy', id: 1234 }
]

// some()
// const albumRelease = songs.some(function (x) {
//     const curentYear = new Date().getFullYear();
//     return curentYear - x.releaseYear;
// })
// const albumRelease = songs.some(x => {
//     const currentYear = new Date().getFullYear();
//     return currentYear - x.releaseYear;
// })

// every()
// const allalbumRelease = songs.every(function (x) {
//     return new Date().getFullYear - x.releaseYear > 1;
// })
// console.log(allalbumRelease)

// find()
// const foodFind = menu.find(function (food) {
//     return food.id === 1234
// })
// const foodFind = menu.find(food => food.id === 1234);
// console.log(foodFind);

// finfIndex()return index
// const index = menu.findIndex(function (name) {
//     return name.text === 'good';
// })
const index = menu.findIndex(name => name.text === 'healthy');
console.log(index);