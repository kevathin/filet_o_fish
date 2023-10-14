widthneeded = window.innerWidth - 130;
cringe = localStorage.getItem('user');
weebawo = document.getElementById('character');
animes = document.getElementById('animes');
text = document.getElementById("dialoge")
varyholder = 0;
weebawo.style.top = (window.innerHeight - 100) + "px";
vx = 1;

animes.style.top =(window.innerHeight-100) + "px";
animes.style.left = widthneeded + "px";
function anime(){
    varyholder = varyholder + vx;
    weebawo.style.left = varyholder + "px";
    if(varyholder > widthneeded){
        if(cringe >= 1){
            text.style.background="url('./img/goodendingtext.png')"
            animes.style.background= "url('./img/goodending.gif')"
        }
        else{
            text.style.background = "url('./img/badendingtext.png')"
            animes.style.width =65 + "px"
            animes.style.background = "url('./img/endingone.gif')"
        }
        
        weebawo.style.display = "none";
        
            
        
       
        clearInterval(anime)
    }
}
setInterval(anime, 1)
