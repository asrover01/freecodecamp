const galleryItems = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector("#close-btn");
const lightbox =document.querySelector(".lightbox");
const lightboxImgae = document.querySelector("#lightbox-image");

galleryItems.forEach(pic =>{pic.addEventListener("click", ()=>{
  lightbox.classList.add("clicked");
    if (pic === galleryItems[0]){
    lightboxImgae.setAttribute("src", "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg");
    } else if (pic === galleryItems[1]){
    lightboxImgae.setAttribute("src", "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg");
    }else if (pic === galleryItems[2]){
    lightboxImgae.setAttribute("src", "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg");
    }
})})
closeBtn.addEventListener("click", ()=>{
  lightbox.classList.remove("clicked");
})
lightbox.addEventListener("click", ()=>{
  lightbox.classList.remove("clicked");
})