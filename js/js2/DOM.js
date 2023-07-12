const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (i = 0; i < evenDivs.length; i++)
{
    evenDivs[i].style.backgroundColor = "#00f";
   /* evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px"; */
}

const navText = document.querySelector("nav h1")
console.log(navText);
navText.textContent = "Hello World!";

const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1>Hey</h1>  <p>This should align right</p>';
console.log(navBar);
navBar.style.justifyContent = "space-between";

console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].nextElementSibling);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


//line 53 to 56 can help to remove ekements from a page
while (view2.lastChild)
{
    view2.lastChild.remove();
}


//line 60 to 72 can help create or add elements to a page
const createDiv = (parent, iter) =>
{
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};

//createDiv(view2, 10);

for (i = 1; i <= 12; i++)
{
    createDiv(view2, i);
}