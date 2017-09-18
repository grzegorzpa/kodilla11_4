function Phone(brand, price, color, weight) {
    this.brand = brand; 
    this.price = price;
    this.color = color;
    this.weight = weight;
};
function Person(name, brand) {
    this.name = name
    this.brand = brand
};

Person.prototype.sayHello = function() {
    console.log("Hi, my name is " + this.name + " and my favorite tel is " + this.brand + ".")
};

Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + ", weight is " + this.weight + " and the price is " + this.price + ".");
};


var RomanP = new Person("Roman", "Samsung");
var GrzegorzP = new Person("Grzegorz", "Huawei");
var MarianP = new Person("Marian", "Apple");

var iPhone6S = new Phone("Apple", 2250, "silver", "324g");
var GalaxyS6 = new Phone("Samsung", 1800, "black", "200g");
var OnePlusOne = new Phone("OnePlus", 1100, "red", "350g");
var HuaweiP9 = new Phone("Huawei", 1700, "blue", "199");

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlusOne.printInfo();
HuaweiP9.printInfo();

RomanP.sayHello();
GrzegorzP.sayHello();
MarianP.sayHello();