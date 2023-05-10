//Elementos

const logou = document.getElementById('logout');
const menunavimg = document.getElementById('navmenuimg');
const navmaster = document.getElementById('navmaster');
const navafter = document.getElementById('navafter');
const navghost = document.getElementById('navghost');

//intro
window.onload = function() {
    setTimeout(function(){
        logou.style.opacity = "0";
        setTimeout(function(){
            logou.style.display = "none";
            menunavimg.style.display = "flex";
            setTimeout(function(){
                menunavimg.style.opacity = "1";
                navmaster.style.background = "#dda245";
                setTimeout(function(){
                    navmaster.style.width = "100px";
                    navmaster.style.height = "100px";
                    navmaster.style.borderRadius = "50%";
                    navmaster.style.position = "fixed";
                    navmaster.style.right = "20px";
                    navmaster.style.bottom = "40px";
                    setTimeout(function(){
                        buttonstart();
                    },1000)
                },1500)
            },50)
        },1000)
    },100)
};


//botones

function buttonstart() {
    navmaster.addEventListener('click',function(){
        navmaster.style.width = "50vw";
        navmaster.style.height = "100vh";
        navmaster.style.borderRadius = "0px";
        navmaster.style.position = "fixed";
        navmaster.style.right = "0px";
        navmaster.style.bottom = "0px";
        menunavimg.style.opacity = "0";
        setTimeout(function(){
            navafter.style.display = "flex";
            navghost.style.display = "flex";
            setTimeout(function(){
                navafter.style.opacity = "1";
                navghost.style.opacity = "1";
                navghost.addEventListener('click', buttonend)
            },100);
        },1000);
    });
}
function buttonend(){
    navafter.style.opacity = "0";
    navghost.style.opacity = "0";
    setTimeout(function(){
        navafter.style.display = "none";
        navghost.style.display = "none";
        menunavimg.style.opacity = "1";

    },1000);
    navmaster.style.width = "100px";
    navmaster.style.height = "100px";
    navmaster.style.borderRadius = "50%";
    navmaster.style.position = "fixed";
    navmaster.style.right = "20px";
    navmaster.style.bottom = "40px";
}