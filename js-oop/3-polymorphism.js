function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items=[]) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    this.render = function() {
        // const renderItem = function(item) {
        //     return `<option>${item}</option>`;
        // };

        // Use arrow function instead of the above function & pass as the Map parameter //
        // Map basically return an array.
        // Without the .join() method, we'll get a comma after every option.
        return `
<select>${this.items.map(item => `
  <option>${item}</option>`).join('')}
</select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement(); // Use the `HtmlElement` object and NOT its prototype
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
];

for(let element of elements)
    console.log(element.render());