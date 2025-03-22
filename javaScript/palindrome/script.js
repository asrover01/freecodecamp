const checkButton = document.getElementById('check-btn');
let resultText = document.getElementById('result');

function palindromeCheck() {
  const checkText = document.getElementById('text-input').value;
  if (checkText === "") {
    alert("Please input a value");
    return;
  }

  const cleanText = checkText.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseText = cleanText.split('').reverse().join('');
  if (cleanText === reverseText) {
    resultText.innerText = `${checkText} is a palindrome`;
  } else {
    resultText.innerText = `${checkText} is not a palindrome`;
  }
}

// Trigger palindromeCheck on button click
checkButton.addEventListener("click", palindromeCheck);

// Trigger palindromeCheck on "Enter" key press
const checkTextInput = document.getElementById('text-input'); // Reference the input field
checkTextInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    palindromeCheck(); 
  }
});
