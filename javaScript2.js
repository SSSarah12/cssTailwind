// positioning


const parent = document.getElementById("parent");
const  downBtn = document.getElementById("buttonDown");
const rightBtn = document.getElementById("buttonRight");
const leftBtn = document.getElementById("buttonLeft");
const upBtn = document.getElementById("buttonUp");

const expression2 = document.getElementById("talwindExp2");

let Top = 0;
let right = 0;
let step = 5;

downBtn.addEventListener("click" , () => {
    Top = Top + step;
    console.log(Top);

    parent.innerHTML = `
        parent: relative
       <div class="bg-amber-400 absolute h-fit px-2 rounded  text-gray-900"
        style="top: ${Top}px ;right: ${right}px">
       absolute</div>
    `
    expression2.textContent = `absolute top-${Top} right-${right}`;
})
rightBtn.addEventListener("click" , () => {
    right = right - step;
    console.log(right);

   parent.innerHTML = `
        parent: relative
       <div class="bg-amber-400 absolute h-fit px-2 rounded  text-gray-900"
        style="top: ${top}px ;right: ${right}px">
       absolute</div>
    `
    expression2.textContent = `absolute top-${Top} right-${right}`;
})

leftBtn.addEventListener("click" , () => {
    right = right + step;
    console.log(right);

   parent.innerHTML = `
       parent: relative
       <div class="bg-amber-400 absolute h-fit px-2 rounded  text-gray-900"
        style="top: ${top}px ;right: ${right}px">
       absolute</div>
    `
    expression2.textContent = `absolute top-${Top} right-${right}`;
})

upBtn.addEventListener("click" , () => {
    Top = Top - step;
    console.log(Top);

    parent.innerHTML = `
       parent: relative
       <div class="bg-amber-400 absolute h-fit px-2 rounded  text-gray-900"
        style="top: ${Top}px ;right: ${right}px">
       absolute</div>
    `
    expression2.textContent = `absolute top-${Top} right-${right}`;
})


// width

const percentage1 = document.getElementById("percentage1");

const pDiv1 = document.getElementById("pDiv1");
const cDiv1 = document.getElementById("cDiv1");
let parentWidth =  pDiv1.getBoundingClientRect().width;  //to get the actual width with pixels
let childWidth = cDiv1.getBoundingClientRect().width;

 
let countP = Number (Number(childWidth) / Number(parentWidth)) * 100;
percentage1.textContent = `${countP}% of container`;


const pDiv2 = document.getElementById("pDiv2");
const cDiv2 = document.getElementById("cDiv2");
parentWidth =  pDiv2.getBoundingClientRect().width;  //to get the actual width with pixels
childWidth = cDiv2.getBoundingClientRect().width;

 
countP = Number (Number(childWidth) / Number(parentWidth)) * 100;
percentage2.textContent = `${countP}% of container`;

const pDiv3 = document.getElementById("pDiv3");
const cDiv3 = document.getElementById("cDiv3");
parentWidth =  pDiv3.getBoundingClientRect().width;  //to get the actual width with pixels
childWidth = cDiv3.getBoundingClientRect().width;

 
countP = ((Number (Number(childWidth) / Number(parentWidth))) * 100);
countP = countP.toFixed(2);
percentage3.textContent = `${countP}% of container`;

const pDiv4 = document.getElementById("pDiv4");
const cDiv4 = document.getElementById("cDiv4");
parentWidth =  pDiv4.getBoundingClientRect().width;  //to get the actual width with pixels
childWidth = cDiv4.getBoundingClientRect().width;

 
countP = ((Number (Number(childWidth) / Number(parentWidth))).toFixed(2) * 100);
percentage4.textContent = `${countP}% of container`;

const pDiv5 = document.getElementById("pDiv5");
const cDiv5 = document.getElementById("cDiv5");
parentWidth =  pDiv5.getBoundingClientRect().width;  //to get the actual width with pixels
childWidth = cDiv5.getBoundingClientRect().width;

 
countP = ((Number (Number(childWidth) / Number(parentWidth)))* 100);
countP = countP.toFixed(2);
percentage5.textContent = `${countP}% of container`;

const pDiv6 = document.getElementById("pDiv6");
const cDiv6 = document.getElementById("cDiv6");
parentWidth =  pDiv6.getBoundingClientRect().width;  //to get the actual width with pixels
childWidth = cDiv6.getBoundingClientRect().width;

 
countP = ((Number (Number(childWidth) / Number(parentWidth))).toFixed(2) * 100);
percentage6.textContent = `${countP}% of container`;

const pDiv7 = document.getElementById("pDiv7");
const cDiv7 = document.getElementById("cDiv7");
parentWidth =  pDiv7.getBoundingClientRect().width;  //to get the actual width with pixels
childWidth = cDiv7.getBoundingClientRect().width;

countP =((Number (Number(childWidth) / Number(parentWidth))).toFixed(2) * 100);
percentage7.textContent = `${countP}% of container`;

// menu

const menuIcon = document.getElementById("menuButton");
const navBar = document.getElementById("navbar");

menuIcon.addEventListener("click" , () => {
    navBar.classList.toggle('active');
    menuIcon.classList.toggle('flipIcon');
})
