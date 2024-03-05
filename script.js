const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

// Define the link URLs
var link1 = "https://braintumor-detection.onrender.com";
var link2 = "https://multipledisease-prediction.streamlit.app";

// Add click event listeners for each button
button1.addEventListener("click", function() {
    // Redirect to link 1
    window.open(link1, '_blank');
});

button2.addEventListener("click", function() {
    // Redirect to link 2
    window.open(link2, '_blank');
});

function scrollToModels() {
    // Find the target section using its id
    const modelsSection = document.getElementById('models');

    // Scroll to the target section with smooth behavior
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}