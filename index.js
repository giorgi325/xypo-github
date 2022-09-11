let menyBtn = document.getElementById("menu-btn");
let sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menyBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
    }

    else {
        sideNav.style.right = "-250px";
    }
}