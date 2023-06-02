// 1 - masala "Person ma'lumotini topish"
/*
let search = prompt(`Personning nimasi qiziqtiryapti?
name, age, student, number`);

function Person() {

    this.name = "Farrux";
    this.age = 16;
    this.student = true;
    this.numPhone = "+998(99)123-45-67";

    this.show = function () {
        if (search == "name") {
            console.log(this.name);
        }
        if (search == "age") {
            console.log(this.age);
        }
        if (search == "student") {
            console.log(this.student);
        }
        if (search == "number") {
            console.log(this.numPhone);
        }
    }
}


const person1 = new Person();

person1.show();
*/


// 2 - masala "Avtomobil haqida ma'lumot obyekt"
/*
const bmw = {
    name: "BMW M5 F90",
    engine: "V8 4.4л 600 л.с",
    year: "2017, 2020",
    maxSpeed: "330 km/s",
    weight: "1930 kg",
};

const lexus = {
    name: "LEXUS LX 570",
    engine: "V8 5.7л 367 л.с",
    year: "2007, 2021",
    maxSpeed: "220 km/s",
    weight: "2680 kg",
};

const mercedes = {
    name: "Mercedes-Benz CLS 63 AMG",
    engine: "V8 bi-turbo 6.2л 514 л.с",
    year: "2010, 2012",
    maxSpeed: "250 km/s",
    weight: "2390 kg",
};


let cars = prompt(`Qaysi mashina sizni qiziqtiradi?
bmw, lexus, mercedes`);

if (cars == "bmw") {
    console.log(bmw);
}

if (cars == "lexus") {
    console.log(lexus);

} else if (cars == "mercedes") {
    console.log(mercedes);
}
*/


// Dasturlash.uz saytidan
// 1 - masala
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 5, 9, 0];
let maxNum = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
        maxNum = arr[i];
    }
}

console.log(maxNum);
*/

// 2 - masala
/*
const arr = [43, 124, 4, 21, 12, 12, 53, 25, 123];
let minNum = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
        minNum = arr[i];
    }
}

console.log(minNum);
*/

// 3 - masala
/*
const arr = [1, 2, 3, 4, 5];
let sum = 0;
let n;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    n = sum / arr[i];
}

console.log(sum);
console.log(n);
*/

// 4 - masala
/*
const arr = [6, 25, 91, 23, 72, 9, 18, 6];
let findN = +prompt("Nechi son kerak?");

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == findN) {
        console.log(true);
    }
}
*/

// 5 - masala
/*
const arr = [6, 25, 91, 23, 72, 9, 18, 6];
let findIndex = +prompt("N kiriting");

for (let i = 0; i < arr.length; i++) {

    if (findIndex < 0 || findIndex >= arr.length) {
        console.log(0);
        break;
    }

    console.log(arr[findIndex]);
    break;
}
*/
