function intToRoman(num) {
  const symbolsList = [
      ["I", 1],
      ["IV", 4],
      ["V", 5],
      ["IX", 9],
      ["X", 10],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CD", 400],
      ["D", 500],
      ["CM", 900],
      ["M", 1000],
      ['V\u0305', 5000],
      ['X\u0305', 10000],
      ['L\u0305', 50000],
      ['C\u0305', 100000],
      ['D\u0305', 500000],
      ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
      const currentDivider = symbolsList[i][1];
      const currentSymbol = symbolsList[i][0];
      
      const result = Math.floor(num / currentDivider);
      if (result > 0) {
          let temp = "";
          for (let j = 0; j < result; j++) {
              temp += currentSymbol;
          }
          roman += temp;
          num %= currentDivider;
      }
      i -= 1;
  }
  return roman;
}

// https://www.calculateme.com/roman-numerals/to-roman/
const userInput = document.getElementById('number');
const convertInput = document.getElementById('convert-button');
const error = document.getElementById('error')
const output = document.getElementById('output');



function toRomans() {
    convertInput.addEventListener('click', function(ev) {
        ev.defaultPrevented()
        let number = userInput.value
        output.textContent = ""
        
        if(number == "") {
            error.textContent= `Enter a number to convert.`
        }else if (number < 1) {
            error.textContent = "Input value should be greater than 1"
        }else if(number > 4000000) {
            error.textContent = `The input value should be within 1 to 4000000  `
        } else if(number % 1 !== 0 ){
            error.textContent = `Input number should not be a decimal or a character`
    
        }  else {
            error.textContent = ""
            let roman = intToRoman(number);
            output.textContent = number + '=' + roman
        }
    })
}

toRomans()
// object.addEventListener("keydown", function() {
//     toRomans
// })
// userInput.addEventListener('keypress', function(e){
//     ev.defaultPrevented();
//     // toRomans()
//     convertInput()
// })
// convertInput.addEventListener(KeyboardEvent, function(ev) {
//     ev.defaultPrevented;
//     let number = userInput.value
//     output.textContent = ""
    
//     // alert(number);
//     if(number == "") {
//         error.textContent= `Enter a number to convert.`
//     }else if (number < 1) {
//         error.textContent = "Input value should be greater than 1"
//     }else if(number > 4000000) {
//         error.textContent = `The input value should be within 1 to 4000000  `
//     } else if(number === (number % 1 === 0)){
//         error.textContent = "no decimal value"
//     } else  {
//         error.textContent = ""
//         let roman = intToRoman(number);
//         output.textContent = number + '=' + roman
//     }
// })

