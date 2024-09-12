/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

document.addEventListener("DOMContentLoaded", function() {
    var img = new Image();
    img.src = 'assets/img/part1.jpeg';

    img.onload = function() {
        const body = document.querySelector("body");
        document.body.style.backgroundImage = "url('assets/img/part1.jpeg')";
        body.style.backgroundSize = "cover";
    };
}); 


/*document.addEventListener("DOMContentLoaded", function() {
    var img = new Image();
    img.src = 'assets/img/part1.jpeg';

    img.onload = function() {
        const body = document.querySelector("body");
        body.style.backgroundImage = "url('assets/img/part1.jpeg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundPosition = "center";
        body.style.height = "100vh";
        body.style.margin = "0";
    };
});*/