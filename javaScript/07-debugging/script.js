
//new code to generate random hex color
    const getRandomIndex = () =>{
      let color = "";
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += randomIndex.toString(16);
        switch (randomIndex.toString(16)) {
          case "10":
            color += "A";
            break;
          case "11":
            color += "B"; 
            break;
          case "12":
            color += "C";
            break;
          case "13":
            color += "D";
            break;
          case "14":
            color += "E";
            break;
          case "15":
            color += "F";
            break;  
        }
      }
      return "#" + color;
    }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  console.log(bgHexCodeSpanElement)
  
  function changeBackgroundColor() {
    const color = getRandomIndex();
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  console.log(btn)
  
  btn.addEventListener("click", changeBackgroundColor);
