const movies = [
    {
        _id: "58bjhsd78edbweq782eudyjkd78",
        title: "Terminator",
        genre:{
            _id: "5bjduiwedh778dj78dwk8", name:"Action"},

        numberInstock: 6,
        dailyRentalRate:2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "59bjhsd78edbweq782eudyjkd78",
        title: "Dilwale",
        genre:{
            _id: "5bjduiwedh778dj78dwk8", name:"Action"},

        numberInstock: 7,
        dailyRentalRate:3.8,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "60bjhsd78edbweq782eudyjkd78",
        title: "Kirsh",
        genre:{
            _id: "5bjduiwedh778dj78dwk8", name:"Action"},

        numberInstock: 8,
        dailyRentalRate:2.7,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "581bjhsd78edbweq782eudyjkd78",
        title: "Janu or Men",
        genre:{
            _id: "5bjduiwedh778dj78dwk8", name:"Love"},

        numberInstock: 10,
        dailyRentalRate:5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "582bjhsd78edb3weq782eudyjkd78",
        title: "Dildewana",
        genre:{
            _id: "5bjduiwedh778dj778dwk8", name:"Comedy"},

        numberInstock: 7,
        dailyRentalRate:4.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    }

];

export function getMovies(){
    return movies;
}