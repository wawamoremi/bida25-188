document.getElementById("viewMenuBtn").addEventListener("click", function() {
document.getElementById("#menu").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("submitBtn").addEventListener("click", function(event) { alert("Thank you for your feedback!.");
 });
let name=document.getElementById("name");
let email=document.getElementById("email");
let feedback=document.getElementById("feedback");
if(name==="" || email=="" || feedback=="") {
    alert("Please fill in all fields.");
} else {
    alert("Thank you, " + name + ", for your feedback!");
}
const navLinks = document.querySelectorAll('.nav-links");
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#443218";
        link.style.transform = "scale(1.1)";
    });
});
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = "scale(1.05)";
    });
    image.addEventListener(mouseout,() => {
        image.style.transform="scale(1)";
    });
});
const button=document.getElementById("viewMenuBtn");
button.addEventListener("mouseover", () => {
    button.style.backgroundColor="#443218";
    button.style.transform="scale(1.05)";
});
button.addEventListener("mouseout", () => {
    button.style.transform="scale(1)";
});