//   PROBLEM-1   //
const address = {
    street: "Stroubles Circle",
    city: "Blacksburg",
    zipCode: 24060
};

function showAddress(address) {
    for(let key in address)
        console.log(key, address[key]);
}
showAddress(address);


//   PROBLEM-2   //
// Using Factory function
function createAddress(street, city, zipCode) {
    return {
        // street: street,
        // city: city,
        // zipCode: zipcode

        street,
        city,
        zipCode
    };
}
// Using Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

    // return this;
}
const address1 = createAddress("Stroubles Circle", "Blacksburg", 24060);
console.log(address1);
const address2 = new Address("Stroubles Circle", "Blacksburg", 24060);
console.log(address2);


//   PROBLEM-3: Object Equality   //
function areEqual(address1, address2) {
    // Check if the stored VALUES are the same.
    return (address1.street === address2.street)
        && (address1.city === address2.city)
        && (address1.zipCode === address2.zipCode);
}

function areSame(address1, address2) {
    // Check if the stored REFERENCES are the same.
    return (address1 === address2);
}
const address1 = new Address("Stroubles Circle", "Blacksburg", 24060);
const address2 = new Address("Stroubles Circle", "Blacksburg", 24060);
const address3 = address1;
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));


//   PROBLEM-4   //
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'}
    ],
    isLive: true
};
console.log(post);


//   PROBLEM-5   //
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
const post = new Post('a', 'b', 'c');
console.log(post);


//   PROBLEM-6   //
let priceRanges = [
    {label: '$', tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50}
];