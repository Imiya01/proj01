/*
* CONSTRUCTOR FUNCTION
*/
function Monkey(name, age, species, foods, introduction){
    this.name = name;
    this.species = species;
    this.foods = foods;
    this.age = age || 2;
    this.howl = "Oooooo";
    this.eatSomething = (food) => {
        console.log(`food eaten ${food}`);
    }
    this.introduction = introduction;
}

const helloHowler = () => {
    console.log('hello howler');
}

Monkey.prototype.gender = 'male';

const spider = new Monkey('Peter Parker', 2, 'spider', 'other monkies', introductionMonkey);
const howler = new Monkey('Howler Parker', 4, 'howler', ['insects', 'banana'], helloHowler);

console.log(spider);
console.log(howler);

//http://api.weatherapi.com/v1/current.json?key=096eb2d648df454d93d184209220808&q=London&aqi=no