// PROBLEM-1 //
function arrayFromRange(min, max) {
    const arr = [];
    let val = min;
    while(val <= max) {
        arr.push(val);
        val++;
    }

    return arr;
}
const numbers = arrayFromRange(-10, -4);
console.log(numbers);


// PROBLEM-2 //
function includes(array, searchElement) {
    for(let element of array)
        if(element === searchElement) return true;

    return false;
}
const numbers = [1, 2, 3, 4];
console.log(includes(numbers, 0));


// PROBLEM-3 //
function except(array, excluded) {
    const output = [];
    for(let element of array) {
        if(!excluded.includes(element))
            output.push(element);
    }

    return output;
}
const numbers = [1, 2, 3, 4];
console.log(except(numbers, [1, 2, 3]));


// PROBLEM-4 //
function move(array, index, offset) {
    const result = array.slice();
    const length = result.length;
    const dest = index + offset;

    if(dest < 0 || dest >= length) {
        console.error("Invalid offset.");
        return;
    }

    const element = result.splice(index, 1)[0];
    result.splice(dest, 0, element);
    return result;
}
const numbers = [1, 2, 3, 4];
console.log(move(numbers, 1, 2));


// PROBLEM-5 //
function countOccurrences(array, searchElement) {
    //   APPROACH-1   //
    let count = 0;
    for(let element of array)
        if(element === searchElement)
            count++;

    return count;

    //   APPROACH-2   //
    const count = array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement)? 1 : 0;
        return accumulator + occurrence;
    }, 0);

    return count;
}
const numbers = [1, 2, 3, 4, 1];
console.log(countOccurrences(numbers, 1));


// PROBLEM-6 //
function getMax(array) {
    //   APPROACH-1   //
    if(array.length === 0) return undefined;

    let maxElement = array[0];
    for(let element of array)
        if(element > maxElement) maxElement = element;

    return maxElement;

    //   APPROACH-2   //
    if(array.length === 0) return undefined;
    return array.reduce((maxElement, currentValue) => (currentValue > maxElement) ? currentValue : maxElement);
}
const numbers = [1, 2, 3, 4];
console.log(getMax(numbers));


// PROBLEM-7 //
const movies = [
    { title: 'a', year: 2018, rating: 4.5 }, 
    { title: 'b', year: 2018, rating: 4.7 }, 
    { title: 'c', year: 2018, rating: 3 }, 
    { title: 'd', year: 2017, rating: 4.5 }
];
// Filter the movies released in 2018 with a rating > 4.
const filteredMovies = movies.filter(movie => movie.year === 2018 && movie.rating > 4);
// Sort by rating in descending order.
filteredMovies.sort((a, b) => {
    // can also replace the below 3 lines with `a.rating - b.rating`
    if(a.rating > b.rating) return 1;
    if(a.rating < b.rating) return -1;
    return 0;
}).reverse();
// Extract titles.
const extractedTitles = filteredMovies.map(movie => movie.title);
console.log(extractedTitles);