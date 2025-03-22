const checkButton = document.getElementById('check-btn');
let resultText = document.getElementById('result');
const checkText = document.getElementById('text-input');

function palindromeCheck() {
  const inputText = checkText.value; // Get the value of the input field

  if (inputText === "") { // Check if the input is empty
    alert("Please input a value");
    return;
  }

  const cleanText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseText = cleanText.split('').reverse().join('');
  
  if (cleanText === reverseText) {
    resultText.innerText = `${inputText} is a palindrome`; // Use inputText, not checkText
  } else {
    resultText.innerText = `${inputText} is not a palindrome`; // Use inputText, not checkText
  }
}

checkButton.addEventListener("click", palindromeCheck);
checkText.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    palindromeCheck(); // Call the palindrome check function
  }
});
