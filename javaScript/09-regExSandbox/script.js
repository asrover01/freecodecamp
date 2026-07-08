const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton =document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

const getFlags = ()=>{
  let gCheck = "";
  let iCheck = "";
  caseInsensitiveFlag.checked? iCheck="i":iCheck="";
  globalFlag.checked ? gCheck = "g" : gCheck = "";
  return iCheck +gCheck
}

testButton.addEventListener("click",()=> {
    const pattern = regexPattern.value;
    let testString = stringToTest.innerText;
    const regex = new RegExp(pattern, getFlags());
    const insert = 
    stringToTest.innerHTML = testString.replace(regex,`<span class="highlight">$&</span>`)
    regex.test(testString)?
    testResult.innerText = testString.match(regex).join(", ") :testResult.innerText = "no match"
  
})
