// script.js

const correctCode = "8139"; // Replace this with your specific 4-digit code

function checkCode() {
  const userCode = document.getElementById("codeInput").value;
  
  if (userCode === correctCode) {
    document.getElementById("successPopup").style.display = "flex";
  } else {
    alert("¡Código incorrecto! Por favor inténtalo de nuevo.");
  }
}

function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}

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
