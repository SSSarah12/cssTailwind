

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

const container = document.getElementById("flexUtilities");
let justifyValue ="";
let itemValue = "";

const expression = document.getElementById("talwindExp");

//I do add eventListener
const justifyStart = document.getElementById("justifyStart");
const justifyEnd = document.getElementById("justifyEnd");
const justifCenter = document.getElementById("justifyCenter");
const justifyBetween = document.getElementById("justifyBetween");
const justifyAround = document.getElementById("justifyAround");
const justifyEvenly = document.getElementById("justifyEvenly");


function resetFlexDivs(){
    
    [
      justifyStart,
      justifyEnd,
      justifCenter,
      justifyBetween,
      justifyAround,
      justifyEvenly
    ].forEach( div => {
        div.classList.remove("activeButtons");
    })
}
[justifyStart , justifyEnd , justifyBetween , justifCenter , justifyAround , justifyEvenly].forEach( btn => {
    btn.addEventListener("click" , () => {
        resetFlexDivs(); //clear previous clicked ones
        btn.classList.add("activeButtons");
        justifyValue = btn.textContent.trim() ;

        container.innerHTML = `
           <div class="flex flex-wrap  ${justifyValue} ${itemValue} gap-4">
               <div class="w-20  bg-amber-400 flex items-center justify-center p-2">div 1</div>
               <div class="w-20  bg-amber-400 flex items-center justify-center p-2">div 2</div>
               <div class="w-20  bg-amber-400 flex items-center justify-center p-2">div 3</div>
           </div>
        `
        expression.textContent = `flex ${justifyValue} ${itemValue}`;
    })
})

const itemStart = document.getElementById("itemStart");
const itemEnd = document.getElementById("itemEnd");
const itemCenter = document.getElementById("itemCenter");
const itemBaseline = document.getElementById("itemBaseline");
const itemStretch = document.getElementById("itemStretch");

function resetItemDivs(){
    
    [
      itemStart,
      itemEnd,
      itemCenter,
      itemBaseline,
      itemStretch,
    ].forEach( div => {
        div.classList.remove("activeButtons");
    })
}
[itemStart , itemEnd , itemCenter , itemBaseline , itemStretch].forEach( btn => {
    btn.addEventListener("click" , () => {
        resetItemDivs(); //clear previous clicked ones
        btn.classList.add("activeButtons");
        itemValue = btn.textContent.trim() ;
        console.log(itemValue);

        container.innerHTML = `
           <div class="flex flex-wrap h-full ${justifyValue} ${itemValue} gap-4">
               <div class="w-20  bg-amber-400 flex items-center justify-center p-2">div 1</div>
               <div class="w-20 bg-amber-400 flex items-center justify-center p-2">div 2</div>
               <div class="w-20  bg-amber-400 flex items-center justify-center p-2">div 3</div>
           </div>
        `
        console.log(container);
        expression.textContent = `flex ${justifyValue} ${itemValue}`;
    })
})


const grid1 = document.getElementById("col1");
const grid2 = document.getElementById("col2");
const grid4 = document.getElementById("col4");
const grid6 = document.getElementById("col6");
const grid8 = document.getElementById("col8");
const grid12 = document.getElementById("col12");

const expression1 = document.getElementById("talwindExp1");

const gridContainer = document.getElementById("gridsContainer");

function resetGridDivs(){
    
    [
      grid1,
      grid2,
      grid4,
      grid6,
      grid8,
      grid12
    ].forEach( div => {
        div.classList.remove("activeButtons");
    })
}

grid1.addEventListener("click" , () => {

    resetGridDivs();
    grid1.classList.add("activeButtons");

    expression1.textContent = `grid grid-cols-1 gap-2`
})

grid2.addEventListener("click" , () => {

    resetGridDivs();
    grid2.classList.add("activeButtons");

    gridContainer.innerHTML=`
       <div class="grid grid-cols-2 gap-2">
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">1</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">2</div>
       </div>
    `
    expression1.textContent = `grid grid-cols-2 gap-2`
})
grid4.addEventListener("click" , () => {

    resetGridDivs();
    grid4.classList.add("activeButtons");

    gridContainer.innerHTML=`
       <div class="grid grid-cols-4 gap-2">
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">1</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">2</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">3</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">4</div>
       </div>
    `
    expression1.textContent = `grid grid-cols-4 gap-2`
})
grid6.addEventListener("click" , () => {

    resetGridDivs();
    grid6.classList.add("activeButtons");

    gridContainer.innerHTML=`
       <div class="grid grid-cols-6 gap-2">
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">1</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">2</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">3</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">4</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">5</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">6</div>
       </div>
    `
    expression1.textContent = `grid grid-cols-6 gap-2`
})
grid8.addEventListener("click" , () => {

    resetGridDivs();
    grid8.classList.add("activeButtons");

    gridContainer.innerHTML=`
       <div class="grid grid-cols-8 gap-2">
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">1</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">2</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">3</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">4</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">5</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">6</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">7</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">8</div>
       </div>
    `
    expression1.textContent = `grid grid-cols-8 gap-2`;
})
grid12.addEventListener("click" , () => {

    resetGridDivs();
    grid12.classList.add("activeButtons");

    gridContainer.innerHTML=`
       <div class="grid grid-cols-12 gap-2">
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">1</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">2</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">3</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">4</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">5</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">6</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">7</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">8</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">9</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">10</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">11</div>
          <div class="bg-amber-400 rounded text-gray-900 flex justify-center">12</div>
       </div>
    `
    expression1.textContent = `grid grid-cols-12 gap-2`;
})





