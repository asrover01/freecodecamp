const checkButton = document.getElementById('check-btn');
let resultText = document.getElementById('result');
const checkText = document.getElementById('text-input');




function palindromeCheck(){
  
  if (checkText.value === "") {
  alert("Please input a value");
  return;
}

  const cleanText= checkText.toLowerCase().replace(/[^a-z0-9]/g,"");
  const reverseText = cleanText.split('').reverse().join('');
  if (cleanText === reverseText){
  resultText.innerText = `${checkText} is a palindrome`;} 
  else
  {resultText.innerText = `${checkText} is not a palindrome`;} 
}

checkButton.addEventListener("click", palindromeCheck);

checkButton.addEventListener("click", palindromeCheck);
checkText.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    palindromeCheck(); 
  }
});
