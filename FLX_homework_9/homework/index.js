function findeTypes() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = typeof arguments[i];
    }
    return arr;
}
alert(findeTypes(2, '5'));
function executeforEach(arr, funct) {
    for (let num in arr) {
        funct(arr[num]);
    }
    return 0;
}
alert(executeforEach([1, 2, 3], function (el) {
    console.log(el);
}));
function mapArray(arr, funct) {
    for (let num in arr) {
        arr[num] = funct(arr[num]);
    }
    return arr;
}
alert(mapArray([2, 5, 8], function (el) {
    return el + 3;
}));
function filterArray(arr, funct) {
    var i = 0;
    var narr=[];
    for (let num in arr) {
        if ((funct(arr[num]))) {
            narr[i] = arr[num];
            i++;
        }
    }
    return narr;
}
alert(filterArray([2, 5, 8], function (el) {
    return el > 3;
}));
var people = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
function getAmountOfAdultPeople(data) {
    var n = 0;
    for (var human in data) {
        if (data[human].age > 18) {
            n++;
        }
    }
    return n;
}
alert(getAmountOfAdultPeople(people));
function getGreenAdultBananaLovers(data) {
    var n = [];
    var i = 0;
    for (var human in data) {
        if (data[human].age > 18 && data[human].eyeColor === "green" && data[human].favoriteFruit==="banana") {
            n[i] = data[human].name;
            i++;
        }
    }
    return n;
}
alert(getGreenAdultBananaLovers(people));
function keys(arrObj) {
    var arr = [];
    var i = 0;
    for (var prop in arrObj) {
        arr[i] = prop;
        i++;
    }
    return arr;
}
alert(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
function values(arrObj) {
    var arr = [];
    var i = 0;
    for (var prop in arrObj) {
        arr[i] = arrObj[prop];
        i++;
    }
    return arr;
}
alert(values({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
function showFormattedDate(date) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return "Date: " + date.getDate() + " of " + months[date.getMonth()] + ', ' + date.getFullYear();
}
alert(showFormattedDate(new Date('2019-01-27T01:10:00')));
function isEvenYear(date) {
    var d = new Date();
    return !(d.getFullYear() !== date.getFullYear())
}
alert(isEvenYear(new Date('2029-01-27T01:10:00')));
function isEvenMonth(date) {
    var d = new Date();
    return !(d.getMonth() !== date.getMonth())
}
alert(isEvenMonth(new Date('2029-02-27T01:10:00')));