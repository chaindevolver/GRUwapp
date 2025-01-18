// header
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");
// const star = document.getElementsByClassName("star")

// star.onclick = alert("Transaction Proceeding")
bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")
    if(icon == "fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark")

    }else{
        e.target.setAttribute("class","fa-solid fa-bars")
    }
    nav.classList.toggle("showNav")
}


// carousel
// const carouselContainer = document.querySelector(".carouselContainer");
// const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
// const allEachCarousel = document.querySelectorAll(".eachCarousel");
// const allIndicator = document.querySelectorAll(".indicator");

// const slideCarousel = (index) => {
//     for(let x = 0; x<allEachCarousel.length;x++){
//         if(x === index){
//             allEachCarousel[x].classList.add("eachCarouselBorder")
//             allIndicator[x].classList.add("activeIndicator")
//         }else{
//             allEachCarousel[x].classList.remove("eachCarouselBorder")
//             allIndicator[x].classList.remove("activeIndicator")
//         }
//     }
//    carouselContainer.scrollLeft = (index * (eachCarousel + 10))
//    console.log(carouselContainer.scrollLeft)
// }



// script.js

const correctCode = "1612"; // Replace this with your specific 4-digit code

function checkCode() {
  const userCode = document.getElementById("codeInput").value;
  
  if (userCode === correctCode) {
    document.getElementById("successPopup").style.display = "flex";
  } else {
    alert("Incorrect code! Please try again.");
  }
}

function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}


