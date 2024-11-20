document.addEventListener("DOMContentLoaded", () => {
    
    let button = document.getElementsByClassName('cta');
    
    button[0].addEventListener("click", clicked);
    
    function clicked() {
        console.log("Test");
        window.open("contact.html");
    }
});