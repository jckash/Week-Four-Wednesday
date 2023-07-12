// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balancedString = (str) => {
  let onePar = 0
  let anotherPar = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      onePar += 1
    } else if (str[i] === ")") {
      anotherPar += 1
    }
  }
  return onePar === anotherPar
}