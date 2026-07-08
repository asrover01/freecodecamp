



const translatePigLatin = str =>{
  const regex = /^[^aeiou]+/i
  let switchChar = str.match(regex)
  console.log(switchChar)
  let addOn = "ay"
 if (switchChar===null) {
    switchChar=""
     addOn="way"
    } else {
    switchChar=switchChar[0]
     addOn="ay";
    }
  const clean = str.replace(regex,"")+switchChar+addOn;
  return clean
}


console.log(translatePigLatin("algorithm"))