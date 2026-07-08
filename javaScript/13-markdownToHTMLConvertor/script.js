const markdownText = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");


const heading = /^(#{1,6})\s(.+)/;
const quote =  /^>\s(.*)/;
const bold= [/\*\*(.*?)\*\*/, /__(.*?)__/ ];
const italic = [/\*(?!\*)(.*?)\*/, 
               /(?<!_)_(?!_)(.*?)_(?!_)/ ];
const image = /!\[(.*?)\]\((.*?)\)/;
const link = /\[(.*?)\]\((.*?)\)/ ;


const convertMarkdown = () =>{
    const input = markdownText.value;
  const lines =input.split("\n");
  const results = []
  

 

  for (let i=0; i<lines.length;i++){
  if (/^[a-zA-Z0-9]/.test(lines[i])) {
  results.push(lines[i]);
  continue;
}
  let lvl = 0
  let block = "";
  let text = "";
  let imgLink = [,]
  if (/^#{1,6}\s/.test(lines[i])){
    block = "header";
    lvl = lines[i].match(/^#{1,6}\s/)[0].trim().length
    text = lines[i].replace(/^#{1,6}\s/, "");
  } else if( /^\>\s/.test(lines[i])){
    block = "quote";
    text = lines[i].replace(/^\>\s/, "");
  } else if(/^!\[/.test(lines[i])){
    block = "image";
    imgLink[0] = lines[i].match(/^!\[(.*?)\]/,"")[1];
    imgLink[1] = lines[i].match(/\((.*?)\)/)[1];
    results.push(`<img alt="${imgLink[0]}" src="${imgLink[1]}">`)
  } else if (/^\[/.test(lines[i])){
    block = "link";
    imgLink[0] = lines[i].match(/^\[(.*?)\]/,"")[1]
    imgLink[1] = lines[i].match(/\((.*?)\)/)[1]
    results.push(`<a href="${imgLink[1]}">${imgLink[0]}</a>`);
  }
  if (text === ""){
    text = lines[i]
  }
  
      text = text.replace(/\*\*(.*?)\*\*/ , "<strong>$1</strong>")
      text = text.replace(/__(.*?)__/,"<strong>$1</strong>")
       text = text.replace(/\*(.*?)\*/ , "<em>$1</em>")
      text = text.replace(/_(.*?)_/,"<em>$1</em>")
   if (block === "header"){
    results.push(`<h${lvl}>${text}</h${lvl}>`)
    
   } else if (block === "quote"){
    results.push(`<blockquote>${text}</blockquote>`)
   } else {
    results.push(text)
   }
  

    console.log(lvl,block,text,imgLink)
}



return htmlOutput.innerText=results.join("\n"),
    preview.innerHTML = results.join("");

}


markdownText.addEventListener("input", convertMarkdown)