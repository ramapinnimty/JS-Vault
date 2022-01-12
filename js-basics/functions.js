// PROBLEM-1 //
function sum(...args) {
    if(args.length === 1 && Array.isArray(args[0]))
        // Flatten the array to 1D using the "Spread operator"
        args = [...args[0]];

    return args.reduce((totalSum, value) => totalSum + value, 0);
}
const result1 = sum(1, 2, 3, 4, 5);
const result2 = sum([1, 2, 3, 4, 5]);
console.log(result1, result2);


// PROBLEM-2 //
const circle = {
    radius: 1, 
    get area() {
        return Math.PI * (this.radius**2);
    }
};
circle.radius = 2;
console.log(circle.radius, circle.area);


// PROBLEM-3 //
function countOccurrences(array, searchElement) {
    if(!Array.isArray(array)) throw new Error("Please input an array!");

    const count = array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement)? 1 : 0;
        return accumulator + occurrence;
    }, 0);

    return count;
}

try {
    const numbers = null; // [1, 2, 3, 4, 1]
    console.log(countOccurrences(numbers, 1));
} catch(e) {
    console.log(e.message);
}