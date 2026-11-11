const palindromes = function (str) {
  const cleanString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = cleanString.split("").reverse().join("");

  return cleanString === reversedString;
};

palindromes("racecar");
palindromes("tacos");

// Do not edit below this line
module.exports = palindromes;
