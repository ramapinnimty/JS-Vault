// PROBLEM-1 //
function maxOfTwo(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}
console.log("Maximum of the two numbers: ", maxOfTwo(3, 1));


// PROBLEM-2 //
function isLandscape(width, height) {
    return (width > height);
}
console.log("Is the display landscape? : ", isLandscape(1080, 720));


// PROBLEM-3 //
function fizzBuzz(input) {
    if(typeof input !== "number")
        console.log("Not a number");
    else {
        if(input % 3 === 0 && input % 5 === 0)
            console.log("FizzBuzz");
        else if(input % 3 === 0)
            console.log("Fizz");
        else if(input % 5 === 0)
            console.log("Buzz");
        else
            console.log(input);
    }
}
fizzBuzz(3);


// PROBLEM-4 //
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit) {
        console.log("OK");
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points == 0)
        console.log("OK");
    else if(points >= 12)
        console.log("LICENSE SUSPENDED");
    else
        console.log("Point(s): ", points);
}
checkSpeed(130);


// PROBLEM-5 //
function showNumbers(limit) {
    for(let i=0; i<=limit; i++) {
        if(i%2 == 0) console.log(i, "EVEN");
        else console.log(i, "ODD");
    }
}
showNumbers(10);


// PROBLEM-6 //
function countTruthy(array) {
    const falsyValues = [undefined, null, '', false, 0, NaN];

    let count = 0;
    for(let value of array) {
        // if(!falsyValues.includes(value))
        //     count++;
        if(value)
            count++;
    }
    console.log("Count of Truthy values: ", count);
}
countTruthy([0, undefined, null, '', 1, 2, 3]);


// PROBLEM-7 //
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

function showProperties(obj) {
    for(let entry of Object.entries(obj))
        if(typeof entry[1] === 'string')
            console.log(entry[0], entry[1]);
}
showProperties(movie);


// PROBLEM-8 //
function calculateSum(limit) {
    let sum = 0;

    for(let i=0; i<=limit; i++)
        if(i%3 === 0 || i%5 === 0)
            sum += i;

    return sum;
}
console.log("Sum: ", calculateSum(10));


// PROBLEM-9 //
function calculateAverage(array) {
    let sum = 0;
    for(let item of array)
        sum += item;
    return (sum / array.length);
}

function calculateGrade(marks) {
    let average = calculateAverage(marks);

    //   METHOD-1   //
    if(average >= 0 && average < 60) return 'F'; 
    else if(average >= 60 && average < 70) return 'D';
    else if(average >= 70 && average < 80) return 'C';
    else if(average >= 80 && average < 90) return 'B';
    else if(average >= 90 && average < 100) return 'A';

    //   METHOD-2   //
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}
const marks = [80, 80, 50];
console.log("Grade: ", calculateGrade(marks));


// PROBLEM-10 //
function showStars(rows) {
    for(let row=1; row<=rows; row++){
        let pattern = '';
        for(let i=1; i<=row; i++)
            pattern += '*';
        console.log(pattern);
    }
}
showStars(3);


// PROBLEM-11 //
function showPrimes(limit) {
    if(limit === 2) console.log(limit);
    else
        for(let number=2; number<=limit; number++)
            if(isPrime(number)) console.log(number);
}

function isPrime(number) {
    for(let factor=2; factor<number; factor++)
        if(number % factor === 0) return false;

    return true;
}
showPrimes(20);