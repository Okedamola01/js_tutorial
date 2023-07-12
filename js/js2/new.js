//parent obj with properties
const vehicle = 
{
    wheels: 4,
    engine: function(wheels)
    {
        if(wheels > 2)
        {
            return "Vrooooooooom!"
        }
        else
        {
            return "No engine!"
        }
    },
    glass: function(wheels)
    {
        if(wheels > 2)
        {
            return "Tinted!"
        }
        else
        {
            return "No glass!"
        }
    },
}

const bicycle = Object.create(vehicle);
bicycle.wheels = 2;


const kekeNapep = Object.create(vehicle);
//kekeNapep.glass = false;
kekeNapep.wheels = 3;


//band object
const band = 
{
    guitar: "Jimmy Paige",
    drums: "Musa Sticks",
    bass: "John Paul Jones",
    vocals: "Robert Plant"
};

//object destructuring
function hit({drums})
{
    return `${drums} hits the drums like crazzzyyy!!!`;
}

//console.log(hit(band));

//js classes
class pizza
{
    constructor(pizzaType, pizzaSize, pizzaCrust)
    {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = pizzaCrust;
    }
    bake()
    {
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`);
    }
}

const myPizza = new pizza("pepperoni", "medium", "thin crust");
myPizza.bake();
//console.log(myPizza.size);
//console.log(myPizza.type);

/*function pizzaFactory(pizzaSize, pizzaCrust)
{
    const size = pizzaSize;
    const crust = pizzaCrust;
    return{
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}

const myPizza = pizzaFactory("xtra large", "thin crust");
myPizza.bake();*/

//JSON intro
const myObj = 
{
    name: "Damola",
    age: 22,
    hobbies: ["Jonzing", "Eating", "Fucking"],
    hello: function()
    {
        console.log("Hello my people!");
    }
}

console.log(typeof myObj);
console.log(myObj.name);
myObj.hello();
console.log(myObj.hobbies[0]);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);


const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);

//odd and even numbers
function oddOrEven(num)
{
    if (num % 2 === 0)
    {
        return `${num} is an even number`;
    }
    else
    {
        return `${num} is an odd number`;
    }
}
console.log(oddOrEven(256));