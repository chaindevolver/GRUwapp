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




// script.js

const pdfCheckbox = document.getElementById('pdf-checkbox');
const whatsappCheckbox = document.getElementById('whatsapp-checkbox');
const proceedButton = document.getElementById('proceed-button');
const numberInputContainer = document.getElementById('number-input-container');
const saveContainer = document.getElementById('save-container');
const saveButton = document.getElementById('save-button');

// Ensure only one checkbox can be selected at a time
pdfCheckbox.addEventListener('change', () => {
    if (pdfCheckbox.checked) {
        whatsappCheckbox.checked = false;
    }
});

whatsappCheckbox.addEventListener('change', () => {
    if (whatsappCheckbox.checked) {
        pdfCheckbox.checked = false;
    }
});

// Handle Proceed button click
proceedButton.addEventListener('click', () => {
    // If "Via PDF Folder" is selected
    if (pdfCheckbox.checked) {
        saveContainer.style.display = 'block'; // Show Save to Device button
        numberInputContainer.style.display = 'none'; // Hide WhatsApp input
    } 
    // If "Access Directly to WhatsApp" is selected
    else if (whatsappCheckbox.checked) {
        numberInputContainer.style.display = 'block'; // Show WhatsApp number input
        saveContainer.style.display = 'none'; // Hide Save to Device button
    } 
    // If no checkbox is selected
    else {
        alert("Please select an option to proceed.");
        saveContainer.style.display = 'none';
        numberInputContainer.style.display = 'none';
    }
});

// Handle Save to Device button click
saveButton.addEventListener('click', () => {
    // Create a downloadable file
    // const fileContent = "This is your PDF content.";
    // const blob = new Blob([fileContent], { type: 'application/pdf' });
    // const downloadLink = document.createElement('a');

    // Set the download attributes
    // downloadLink.href = URL.createObjectURL(blob);
    // downloadLink.download = '';

    // // Trigger the download
    // downloadLink.click();
});




