function ibg(){let e=document.querySelectorAll(".ibg");for(var r=0;r<e.length;r++)e[r].querySelector("img")&&(e[r].style.backgroundImage="url("+e[r].querySelector("img").getAttribute("src")+")")}$(document).ready((function(){$(".header__burger").click((function(){$(".header__burger, .header__menu").toggleClass("active"),$("body").toggleClass("lock")}))})),ibg();