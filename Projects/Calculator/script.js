const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentExpression = '0';
let shouldResetDisplay = false;

// Function to evaluate mathematical expressions safely
function evaluateExpression(expression) {
  // Replace × with * and ÷ with /
  expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
  
  // Remove any trailing operators
  expression = expression.replace(/[+\-*/]+$/, '');
  
  if (!expression) return '0';
  
  try {
    // Use Function constructor to safely evaluate the expression
    const result = new Function('return ' + expression)();
    
    // Handle division by zero
    if (!isFinite(result)) {
      throw new Error('Division by zero');
    }
    
    // Format the result
    if (Number.isInteger(result)) {
      return result.toString();
    } else {
      return parseFloat(result.toFixed(8)).toString();
    }
  } catch (error) {
    throw new Error('Invalid expression');
  }
}

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    
    if (value === 'C') {
      // Clear button
      currentExpression = '0';
      display.textContent = '0';
      shouldResetDisplay = false;
    } else if (value === '=') {
      // Equal button - handled separately
      return;
    } else if (value === '−') {
      // Handle minus sign
      if (shouldResetDisplay) {
        currentExpression = '-';
        display.textContent = '-';
        shouldResetDisplay = false;
      } else {
        currentExpression += '-';
        display.textContent += '-';
      }
    } else if (value === '×' || value === '÷' || value === '+') {
      // Handle operators
      if (shouldResetDisplay) {
        currentExpression = display.textContent + value;
        display.textContent += value;
        shouldResetDisplay = false;
      } else {
        currentExpression += value;
        display.textContent += value;
      }
    } else {
      // Handle numbers and decimal point
      if (shouldResetDisplay || display.textContent === '0') {
        display.textContent = value;
        currentExpression = value;
        shouldResetDisplay = false;
      } else {
        display.textContent += value;
        currentExpression += value;
      }
    }
  });
});

// Equal button logic
equalsBtn.addEventListener('click', () => {
  try {
    const result = evaluateExpression(currentExpression);
    display.textContent = result;
    currentExpression = result;
    shouldResetDisplay = true;
  } catch (error) {
    display.textContent = 'Error';
    currentExpression = '0';
    shouldResetDisplay = true;
  }
});

