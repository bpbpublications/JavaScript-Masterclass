function tagFunction(strings, ...expressions) {
  // Manipulate the strings and expressions
  // Return the final string
}

const result = tagFunction`Template literal`;

function highlight(strings, ...values) {
  let result = "";
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += `<span class="highlight">${values[i]}</span>`;
    }
  });
  return result;
}

const name = "John";
const age = 25;
const highlighted = highlight`Hello, my name is ${name} and I am ${age} years old.`;
