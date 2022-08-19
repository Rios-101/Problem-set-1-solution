// Question 1
const question1First = document.getElementById("question1First");
const question1Secound = document.getElementById("question1Secound");
const question1Click = document.getElementById("question1click");
const question1Ans = document.getElementById("answer");

const sum = () => {
   return parseInt(question1First.value) + parseInt(question1Secound.value);
};
const mul = () => {
   return parseInt(question1First.value) * parseInt(question1Secound.value);
};
const div = () => {
   return parseInt(question1First.value) / parseInt(question1Secound.value);
};
const dif = () => {
   return parseInt(question1First.value) - parseInt(question1Secound.value);
};

question1Click.addEventListener("click",()=>{
   question1Ans.innerHTML = `The sum = ${sum()} , The Product = ${mul()}, The Difference = ${dif()}, The Quotient = ${div()}`;
})

// Question 2 
const question2First = document.getElementById("question2First");
const question2Secound = document.getElementById("question2Secound");
const question2Click = document.getElementById("question2click");
const question2Ans = document.getElementById("question2answer");

question2Click.addEventListener("click",()=>{
   
   if (parseInt(question2First.value) > parseInt(question2Secound.value)) {
      question2Ans.innerHTML = `${parseInt(question2First.value)} is Larger`;
   } else if (parseInt(question2First.value) === parseInt(question2Secound.value)) {
      question2Ans.innerHTML = `The Numbers Are Equal`;
   } else {
      question2Ans.innerHTML = `${parseInt(question2Secound.value)} is Larger`;
   }
})

// Question 3
const question3First = document.getElementById("question3First");
const question3Secound = document.getElementById("question3Secound");
const question3Third = document.getElementById("question3Third");
const question3Click = document.getElementById("question3click");
const question3Ans = document.getElementById("question3answer");

const add = () =>{
   return( parseInt(question3First.value) +
   parseInt(question3Secound.value) +
   parseInt(question3Third.value))
}

const average = ()=>{
   return Math.floor(add() / 3);
}

const product = () => {
   return (
      parseInt(question3First.value) *
      parseInt(question3Secound.value) *
      parseInt(question3Third.value)
   );
};

const gratest = ()=>{
   if (
      parseInt(question3First.value) > parseInt(question3Secound.value) &&
      parseInt(question3First.value) > parseInt(question3Third.value)
   ) {
      return parseInt(question3First.value);
   } else if (
      parseInt(question3Secound.value) > parseInt(question3First.value) &&
      parseInt(question3Secound.value) > parseInt(question3Third.value)
   ) {
      return parseInt(question3Secound.value);
   } else if (
      parseInt(question3Third.value) > parseInt(question3First.value) &&
      parseInt(question3Third.value) > parseInt(question3Secound.value)
   ) {
      return parseInt(question3Third.value);
   }
}

const smallest = ()=>{
   if (
      parseInt(question3First.value) <= parseInt(question3Secound.value) &&
      parseInt(question3First.value) <= parseInt(question3Third.value)
   ) {
      return parseInt(question3First.value);
   } else if (
      parseInt(question3Secound.value) <= parseInt(question3First.value) &&
      parseInt(question3Secound.value) <= parseInt(question3Third.value)
   ) {
      return parseInt(question3Secound.value);
   } else if (
      parseInt(question3Third.value) <= parseInt(question3First.value) &&
      parseInt(question3Third.value) <= parseInt(question3Secound.value)
   ) {
      return parseInt(question3Third.value);
   }
}

question3Click.addEventListener("click", ()=>{
      question3Ans.innerHTML = `The sum = ${add()} , The Product = ${product()}, The Average = ${average()}, The Smallest = ${smallest()} and The Largest = ${gratest()} `
})

// Question 4
const question4First = document.getElementById("question4First");
const question4Secound = document.getElementById("question4Secound");
const question4Third = document.getElementById("question4Third");
const question4Fourth = document.getElementById("question4Fourth");
const question4Fifth = document.getElementById("question4Fifth");
const question4Click = document.getElementById("question4click");
const question4Ans = document.getElementById("question4answer");

question4Click.addEventListener("click",()=>{
   const num = []
   num.push(
      question4First.value,
      question4Secound.value,
      question4Third.value,
      question4Fourth.value,
      question4Fifth.value
   );
   question4Ans.innerHTML = `The Largest number is ${Math.max(...num)} and The smallest number is ${Math.min(...num)}`
})

// Question 5
const question5First = document.getElementById("question5First");
const question5Click = document.getElementById("question5click");
const question5Ans = document.getElementById("question5answer");

question5Click.addEventListener("click", ()=>{
   if(parseInt(question5First.value)% 2 === 0){
      question5Ans.innerHTML = `its an Even number`
   }else{
      question5Ans.innerHTML = `its an Odd number`;
   }
})

// Question 6
const question6First = document.getElementById("question6First");
const question6Secound = document.getElementById("question6Secound");
const question6Click = document.getElementById("question6click");
const question6Ans = document.getElementById("question6answer");

question6Click.addEventListener("click", ()=>{
   if (parseInt(question6First.value) % parseInt(question6Secound.value) === 0) {
      question6Ans.innerHTML = `${parseInt(
         question6First.value
      )} is a multiple of ${parseInt(question6Secound.value)}`;
   } else {
      question6Ans.innerHTML = `its not a multiple`;
   }
})

// Question 8
const question8First = document.getElementById("question8First")
const question8click = document.getElementById("question8click");
const question8answer = document.getElementById("question8answer");


question8click.addEventListener("click",()=>{
   const pi = 3.14159;

   question8answer.innerHTML = `The Diameter is ${
      2 * parseInt(question8First.value)
   }, The Circumference is ${
      2 * pi * parseInt(question8First.value)
   } and The Area is ${pi * Math.sqrt(parseInt(question8First.value))}`;

})

// question 9
const question9click = document.getElementById("question9click");
const question9answer = document.getElementById("question9answer");

question9click.addEventListener("click",()=>{
   question9answer.innerHTML = `A = 65 , B = 66, C = 67, a = 97, b = 98, c = 99, 0 = 48, 1 = 49, 2 = 50, $ = 36, * = 42, + = 43, / = 47, Blank = 32`;
})

// Question 10
const question10First = document.getElementById("question10First")
const question10click = document.getElementById("question10click");
const question10answer = document.getElementById("question10answer");


question10click.addEventListener("click", ()=>{
   const arr = [...question10First.value];
   const number = arr.map((e)=>{
      return Number(e)
   })
   console.log(number)
   question10answer.innerHTML = `${number[0]}\xa0\xa0\xa0${number[1]}\xa0\xa0\xa0${number[2]}\xa0\xa0\xa0${number[3]}\xa0\xa0\xa0${number[4]}`;
   
})

