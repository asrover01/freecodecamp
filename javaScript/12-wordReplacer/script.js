const myReplace = (str, finder, replacer)=>{
  
  const capCheck = /^[A-Z]/.test(finder)
  if (capCheck){
   replacer = replacer[0].toUpperCase() + replacer.slice(1);
  } else {
    replacer= replacer.toLowerCase()
  }
  console.log(replacer)
  const result = str.replace(finder, replacer);
  console.log(result)
return result;
}



myReplace("I think we should look up there", "up", "Down")