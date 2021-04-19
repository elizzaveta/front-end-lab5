'use strict'

/*--------------------------------------*/
/*---------------Part 1-----------------*/
/*--------------------------------------*/

/*---------------forEach----------------*/
let arr = ['first','second','third','fourth'];

//1
arr.forEach((item)=>{console.log(item + ": " + item.length + " symbols")});
console.log("--------");

//2
arr.forEach((item, i, A) => {
    A[i] = i+1 + " " + item + " elem";
    console.log(A[i] + ": " + A[i].length + " symbols")
})
console.log("--------");

/*---------------filter----------------*/
//1
let numbers = [12, 23, 10, 7, 38, 27, 28];
let odd_numbers = numbers.filter((item) => item % 2 === 1);
console.log("odd numbers:\n-- " + odd_numbers);

//2
let names = ['James','Eva','Eliot','Sam','Emmy', 'Ray'];
let names_start_E = names.filter((item) => item[0] === 'E');
console.log("names from 'names' array, starting with 'E':\n-- " + names_start_E);

/*---------------map----------------*/
//1
let values_with_spaces = ['t test', 't text xt', 'some v alue'];
let values_with_dashes = values_with_spaces.map((item) => item.replaceAll(' ', '-'));
console.log("values space replaced with dash:\n-- " + values_with_dashes);

//2
let ascii = [108, 97, 98, 32, 53];
let letters = ascii.map((item) => String.fromCharCode(item));
console.log("letters from ascii array:\n-- " + letters);


/*---------------every/some----------------*/
let person_grades = [89, 71, 92, 58, 68, 97];

//1
let person_passed_exams = person_grades.every((item) => item >= 60);
if(person_passed_exams) console.log("Person passed exams. (from 'every')");
else console.log("Person failed exams. (from 'every')");

//2
let person_failed_exames = person_grades.some((item) => item<60);
if(person_failed_exames) console.log("Person failed exams. (from 'some')");
else console.log("Person passed exams. (from 'some')");

/*---------------reduce/reduceRight----------------*/
//1
let words = ['Document','Object', 'Model'];
let abbreviation = words.reduce(function (prev, cur)  {return prev+cur[0]}, '' ) ;
console.log("--abbreviation: " + abbreviation);

//2
let numbers2 = [1, 2, 3, 4, 5];
let numbers2_backwards = numbers2.reduceRight(function(prev, cur) { return prev + " " + cur},'');
console.log("--numbers backwards: " + numbers2_backwards);

/*--------------------------------------*/
/*---------------Part 2-----------------*/
/*--------------------------------------*/


/*----------конструктор, створення об'єкта, this-------*/

//ES5
let container_es5 = function(owner_name, items){
    this.owner_name = owner_name;
    this.items = items;
}

let bag_Eva = new container_es5('Eva', ['phone', 'apple', 'pen']);

container_es5.prototype.show_owner = function (){
    console.log("-the owner is " + this.owner_name);
}

container_es5.prototype.show_items = function (){
    console.log("-" + this.owner_name + "'s container:");
    this.items.forEach((item, i, arr) => console.log("--item #" + (i+1) + ": " + item));
}

//ES6
class container_es6{
    constructor(owner_name, items) {
        this.owner_name = owner_name;
        this.items = items;
    }
    show_items(){
        console.log("-" + this.owner_name + "'s container:");
        this.items.forEach((item, i, arr) => console.log("--item #" + (i+1) + ": " + item));
    }
}

let bag_John = new container_es6('John', ['phone', 'carrot', 'book', 't-shirt']);

/*--------------------наслідування--------------------*/
/*-------поліморфізм (перевизначення методів)---------*/

//ES5
let bag_es5 = function (name, items, color, size, material){
    container_es5.call(this,name, items);
    this.color = color;
    this.size = size;
    this.material = material;
}
bag_es5.prototype = Object.create(container_es5.prototype);
bag_es5.prototype.constructor = bag_es5;

bag_es5.prototype.show_items = function (){
    console.log("-" + this.owner_name + "'s bag:");
    this.items.forEach((item, i, arr) => console.log("--item #" + (i+1) + ": " + item));
}

let bag_Marta = new bag_es5('Marta', ['hairbrush', 'laptop'], 'blue', 'medium', 'leather');

//ES6
class bag_es6 extends container_es6{
    constructor(name, items, color, size, material) {
        super(name, items);
        this.color = color;
        this.size = size;
        this.material = material;
    }
    show_items() {
        console.log("-" + this.owner_name + "'s bag:");
        this.items.forEach((item, i, arr) => console.log("--item #" + (i+1) + ": " + item));
    }
}

let bag_Simon = new bag_es6('Simon', ['book', 'keys', 'ring'], 'black', 'big', 'leather');


/*-----приватні, публічні члени (властивості та методи)------*/

//ES5
let wallet_es5 = function (owner_name, initial_money){
    this.owner_name = owner_name;
    let money = initial_money;
    let self = this;
    this.get_money_amount = function (){ return money; }
    this.put_money = function (add) { money += add; }
    this.take_money = function (take) {
        if(money - take >= 0){
            money -= take;
            return take;
        }
        else{
            return 0;
        }
    }
    function enough_money(){
        if(money > 50) console.log(self.owner_name + " has enough money")
        else console.log(self.owner_name + " doesn't have enough money")
    }
    this.call_enough_money = function(){ enough_money() }
}

let wallet_Eva = new wallet_es5('Eva', 100);

//ES6
class wallet_es6{
    #money;
    constructor(owner_name, initial_money) {
        this.owner_name = owner_name;
        this.#money = initial_money;
    }

    get_money_amount(){ return this.#money; }
    put_money(add) { this.#money += add; }
    take_money(take) {
        if(this.#money - take >= 0){
            this.#money -= take;
            return take;
        }
        else{
            return 0;
        }
    }

    #enough_money() {
        if(this.#money > 50) console.log(this.owner_name + " has enough money")
        else console.log(this.owner_name + " doesn't have enough money")
    }
    call_enough_money(){this.#enough_money()}
}

let wallet_John = new wallet_es6('John', 100);













