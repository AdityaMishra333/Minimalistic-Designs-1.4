const body = document.body;

let c = "0";
const display = document.getElementById("display");
display.textContent = c;

let justEvaluated = false;

const num0 = document.getElementById("zero");
num0.addEventListener("click", () => {
  calculate("zero");
});

const num1 = document.getElementById("one");
num1.addEventListener("click", () => {
  calculate("one");
});

const num2 = document.getElementById("two");
num2.addEventListener("click", () => {
  calculate("two");
});

const num3 = document.getElementById("three");
num3.addEventListener("click", () => {
  calculate("three");
});

const num4 = document.getElementById("four");
num4.addEventListener("click", () => {
  calculate("four");
});

const num5 = document.getElementById("five");
num5.addEventListener("click", () => {
  calculate("five");
});

const num6 = document.getElementById("six");
num6.addEventListener("click", () => {
  calculate("six");
});

const num7 = document.getElementById("seven");
num7.addEventListener("click", () => {
  calculate("seven");
});

const num8 = document.getElementById("eight");
num8.addEventListener("click", () => {
  calculate("eight");
});

const num9 = document.getElementById("nine");
num9.addEventListener("click", () => {
  calculate("nine");
});

// operators
const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  calculate("plus");
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  calculate("minus");
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
  calculate("multiply");
});

const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
  calculate("divide");
});

const dot = document.getElementById("dot");
dot.addEventListener("click", () => {
  calculate("dot");
});

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
  calculate("equals");
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  calculate("clear");
});

const Delete = document.getElementById("delete");
Delete.addEventListener("click", () => {
  calculate("delete");
});

function resetfordigits(){

  if (c === "0" || justEvaluated) {
    c = "";
    justEvaluated = false;
  }

}

function resetforoperators(){

  if (c === "0" || justEvaluated) {
    justEvaluated = false;
  }

}


function calculate(click){

  if (click === "zero") {
    
    resetfordigits();

    c = c + "0";
    display.textContent = c;
  }

  if (click === "one") {

    resetfordigits();

    c = c + "1";
    display.textContent = c;
  }

  if (click === "two") {

    resetfordigits();

    c = c + "2";
    display.textContent = c;
  }

  if (click === "three") {
    
    resetfordigits();

    c = c + "3";
    display.textContent = c;
  }

  if (click === "four") {
    
    resetfordigits();

    c = c + "4";
    display.textContent = c;
  }

  if (click === "five") {
    
    resetfordigits();

    c = c + "5";
    display.textContent = c;
  }

  if (click === "six") {

    resetfordigits();

    c = c + "6";
    display.textContent = c;
  }

  if (click === "seven") {

    resetfordigits();

    c = c + "7";
    display.textContent = c;
  }

  if (click === "eight") {

    resetfordigits();

    c = c + "8";
    display.textContent = c;
  }

  if (click === "nine") {

    resetfordigits();
    
    c = c + "9";
    display.textContent = c;
  }

  // decimal point
  if (click === "dot") {
    
    resetforoperators();

    c = c + ".";
    display.textContent = c;
  }

  // operators
  if (click === "plus") {

    resetforoperators();

    c = c + "+";
    display.textContent = c;
  }

  if (click === "minus") {

    resetforoperators();

    c = c + "-";
    display.textContent = c;
  }

  if (click === "multiply") {
    
    resetforoperators();

    c = c + "*";
    display.textContent = c;
  }

  if (click === "divide") {

    resetforoperators();
    
    c = c + "/";
    display.textContent = c;
  }

  if (click === "equals") {
    try{
        c = eval(c).toString();
        display.textContent = c;
        justEvaluated = true;
    }
    catch(error){
        display.textContent = "error";
        c = "0";
    }
  }

  if(click === "clear"){
    c = "0";
    display.textContent = c;
  }

  if(click === "delete"){
    c = c.slice(0, -1);
    if(c === "" || c === undefined){
      c = "0";
    }
    display.textContent = c;
  }
}

  // controls using keyboard

document.addEventListener("keydown", function(e){
  switch (e.key) {
    case "0": calculate("zero"); break;
    case "1": calculate("one"); break;
    case "2": calculate("two"); break;
    case "3": calculate("three"); break;
    case "4": calculate("four"); break;
    case "5": calculate("five"); break;
    case "6": calculate("six"); break;
    case "7": calculate("seven"); break;
    case "8": calculate("eight"); break;
    case "9": calculate("nine"); break;
    case ".": calculate("dot"); break;
    case "+": calculate("plus"); break;
    case "-": calculate("minus"); break;
    case "*": calculate("multiply"); break;
    case "/": calculate("divide"); break;
    case "Enter": calculate("equals"); break;
    case "Delete": calculate("clear"); break;
    case "Backspace": calculate("delete"); break;
  }
});
