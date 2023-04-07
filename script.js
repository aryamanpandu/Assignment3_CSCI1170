let button1 = document.getElementById("Palette1");
let button2 = document.getElementById("Palette2");
let button3 = document.getElementById("Palette3");
let button4 = document.getElementById("submitForm");
let button5 = document.getElementById("notif");

let nav = document.getElementById("nav2");
let body = document.getElementById("background");
//colour changer
button1.addEventListener("click",function() {
    body.classList.remove("palette2");
    body.classList.remove("palette3");

    body.classList.remove("palette2nav");
    nav.classList.remove("palette3nav");

    
    nav.classList.toggle("palette1nav");
    body.classList.toggle("palette1");
}); 

button2.addEventListener("click", function() {
    body.classList.remove("palette1");
    body.classList.remove("palette3");

    nav.classList.remove("palette1nav");
    nav.classList.remove("palette3nav");

    body.classList.toggle("palette2");
    nav.classList.toggle("palette2nav");
});

button3.addEventListener("click", function() {
    body.classList.remove("palette1");
    body.classList.remove("palette2");

    nav.classList.remove("palette2nav");
    nav.classList.remove("palette2nav");

    body.classList.toggle("palette3");
    nav.classList.toggle("palette3nav");
});

//event handler
button4.addEventListener("click", function() {

    let name = document.getElementById("textInputForm").value;
    let textArea = document.getElementById("show_review").value;
    //conditionals feature
    if (name == "" || textArea == "") {
        alert("Please fill all the fields.");
    } else {
        alert("Thank you for the submission!");
    }
   
}); 

button5.addEventListener("click", function() {
    //notification
    alert("Have a nice day!");
});

