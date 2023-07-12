/**
 * Fetch API
 * Callbacks, Promises, Thenables and Async/wait
 */

//Promises
//3 states: Pending, Rejected and Fulfilled

const myPromise = new Promise((resolve, reject) =>
{
    const error = false;
    if (!error)
    {
        resolve("Yes, resolved the promise!");
    }
    else
    {
        reject("No, rejected the promise!");
    }
});


const myNextPromise = new Promise((resolve, reject) =>
{
    setTimeout(function()
    {
        resolve("My next promise resolved!");
    }, 5000);
});

myNextPromise.then(value =>
    {
        console.log(value);
    })

myPromise.then(value =>
    {
        console.log(value);
    })





/*console.log(myPromise);

myPromise.then(value =>
    {
        return value + 1;
    })
    .then(newValue =>
        {
            console.log(newValue);
        })
    .catch(err =>
        {
            console.error(err);
        })*/

const users = {
    userList: []
}


async function myCoolFunction()
{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

async function anotherFunc()
{
    const data = await myCoolFunction();
    users.userList = data;
    console.log(data);
}

//anotherFunc();


//code to fetch user data from a site and extract emails to put into an array
async function userEmails()
{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const emailArray = jsonUserData.map(user =>
        {
            return user.email;
        });

    postEmail(emailArray);
}


function postEmail(data)
{
    console.log(data);
}

userEmails();



//fetch api using 2 parameters to search for data
async function getDadJokes()
{
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })

    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}

getDadJokes();



// fetch api to send data
const realJoke = 
{
    id: '1',
    joke: 'oro kaan ngbe mi lokan.'
}

const jokeObject = 
{
    id: '2',
    joke: 'I decided to sell my Hoover… well it was just collecting dust.'
}

async function postJoke(jokeObj)
{
    const response =  await fetch("https://httpbin.org/post", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse.headers);
}

postJoke(jokeObject);


//Chuck Norris joke fetcher with temperate literals
const requestJoke = async (firstName, lastName) =>
{
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jsonResponse = await response.json();

    console.log(jsonResponse.value);
}

requestJoke("21", "Savage");