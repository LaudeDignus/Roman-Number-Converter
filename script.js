const get_number = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const roman_numerals = {
  0: [1000, "M"],
  1: [900, "CM"],
  2: [500, "D"],
  3: [400, "CD"],
  4: [100, "C"],
  5: [90, "XC"],
  6: [50, "L"],
  7: [40, "XL"],
  8: [10, "X"],
  9: [9, "IX"],
  10: [5, "V"],
  11: [4, "IV"],
  12: [1, "I"],
};

const convertedToRomanNumber = (number) => {
  const stockRomanNumber = [];

  Object.keys(roman_numerals).forEach((el) => {
    while (number >= roman_numerals[el][0]) {
      stockRomanNumber.push(roman_numerals[el][1]);
      number -= roman_numerals[el][0];
    }
  });

  output.innerText = stockRomanNumber.join("");
};

const checkNumber = (numberInput) => {
  const number = parseInt(numberInput);

  if (!number || numberInput.match(/[e.]/g)) {
    console.log("Number valid", numberInput.match(/e/g));
    output.innerText = "Please enter a valid number";
    return;
  }
  if (number < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (number > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  convertedToRomanNumber(number);
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  output.innerText = "";
  checkNumber(get_number.value);
});
