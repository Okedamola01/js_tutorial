const myObj = {
    name: "Damola",
    hobbies: ['eat', 'sleep', 'code'],
    logname: function()
    {
        console.log(this.name);
    }
};

const myArray = ['eat', 'sleep', 'code'];

localStorage.setItem("mylocalStore",JSON.stringify(myArray));
const key = localStorage.key(1);
const store = JSON.parse(localStorage.getItem("mylocalStore"));
console.log(key);