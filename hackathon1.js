secret = 0;
distance = 0;
counter = 0;

  const tallpeople = window.innerHeight - 400;
  const chary = document.getElementById("character");
  const long_story_block = document.getElementById("long_story_block");
  const flowers = document.getElementById("flowers")
  flowers.style.top = (386 + tallpeople) + "px";
  grades = [];
  notadoor =[];
  
  console.log(tallpeople)
  class stages {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    getY() {
      return this.y;
    }
    getX() {
      return this.x;
    }
  }
  for (i = 1; i <= 16; i++) {
    x = Math.round(Math.random() * 500) + 2000 * i;
    y = Math.round(Math.random() * 400) + tallpeople;
    grades[i - 1] = new stages(x, y);
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "grade_" + i);
    newDiv.style.left = grades[i - 1].getX() + "px";
    newDiv.style.top = grades[i-1].getY() + "px";
    newDiv.style.height = tallpeople +400 - grades[i-1].getY() + "px";
    newDiv.style.width = 300 + "px"
    newDiv.style.position = "absolute";
    newDiv.style.X = grades[i-1].getX();
    newDiv.style.Y = grades[i-1].getY();
    newDiv.setAttribute("class","notdoorway")
    if(( tallpeople + 400 - grades[i-1].getY()) >= 150 ){
      newDiv.setAttribute("class", "doorway")
    }
    else{
      notadoor.push(i-1)
    }
    document.body.insertBefore(newDiv, long_story_block);
  }
  for(i=0; i< notadoor.length; i++){
  const newDiv1 = document.createElement("div");
  newDiv1.setAttribute("id","table"+i)
  newDiv1.style.left = (grades[notadoor[i]].getX()) + "px";
  newDiv1.style.top = (grades[notadoor[i]].getY() -150 )+ "px";
  newDiv1.style.width = 300 + "px";
  newDiv1.style.height = 150 + "px";
  newDiv1.style.X = grades[notadoor[i]].getX();
  newDiv1.style.position = "absolute";
  newDiv1.style.border="black solid 1px";
  newDiv1.setAttribute("class","notadoorway")
  console.log(newDiv1)
  document.body.insertBefore(newDiv1, long_story_block);
  }
  long_story_block.style.width = window.innerWidth + "px";
  chary_x = 10;
  chary.style.left = 10 + "px";
  chary.style.top = 300 + "px";
  chary_y = 300 + tallpeople;
  charvolnum = 0;
  a1 = 0;
  a2 = 0;
  volx = 0;
  
  var audio = new Audio('./img/BeepBox-Song(1).mp3');
  already = 0 
  function wait(){
  already = 0
  clearInterval(wait)
  }
  document.addEventListener("keydown", (e) => {
    if (e.key == "f"){
     
        if(chary_x >= grades[secret].getX() - distance && (chary_x + 65) <= grades[secret].getX() - distance + 300){
          secret = secret + 1;
          console.log("sex")
        }
      
      
    }
    if(e.key == "m"){
      if(already == 0){
        audio.play();
        already = 1
        setInterval(wait, 87000)
      }
  
    }
    if (e.code == "ArrowUp") {
      
      if (chary_y == 300+ tallpeople) {
          charvolnum = 4;
          chary_y = 300 + tallpeople
      }
      else if((chary_x + 65) >= walls.style.X && (chary_x ) <= (walls.style.X + 300)){
        console.log(chary_y)
        console.log(walls.style.Y - 100)
          if(chary_y == (walls.style.Y - 100) && (charvolnum == 0) ){
              charvolnum = 4;
              chary_y = walls.style.Y - 100
          }
      }
      else{
        chary_y = chary_y
      }
      
    }
  });
  document.addEventListener("keydown", (e) => {
      e.preventDefault()
      e.stopPropagation();
    if (e.code == "ArrowRight") {
      anime()
      setInterval(anime, 1000);
        volx = 2;
      
    }
    if (e.code == "ArrowLeft") {
      anime()
      setInterval(anime, 1000);
      volx = -2;
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.code == "ArrowRight") {
      if (volx == -5) {
      } else {
        volx = 0;
      }
    }
    if (e.code == "ArrowLeft") {
      if (volx == 5) {
      } else {
        volx = 0;
      }
    }
  });
  dialoge = document.getElementById('dialoge')
  function jumping() {
    chary_y = chary_y - charvolnum;
    walls = document.querySelector('.notdoorway')
    dialoge.style.background = "url('./img/text"+ counter +".png')"
    if(distance > 35500){
      localStorage.setItem('user', secret);
      window.open("hackathonending.html")
    }
    
    if(((chary_x + 65) >= walls.style.X && (chary_x + 65) <= (walls.style.X + 300) && chary_y +100>= walls.style.Y) || (chary_x  >= walls.style.X  && chary_x  <= (walls.style.X + 300) && chary_y +100>= walls.style.Y)){
      if(chary_y +100< walls.style.Y){
          charvolnum = charvolnum - 0.04;
      }
      if(chary_y +100>= walls.style.Y && charvolnum < 0 && chary_y+100 <= walls.style.Y +10){
          charvolnum = 0;
          chary_y = walls.style.Y - 100;
          chary.style.top = walls.style.Y - 100 + "px";
      }
      else if(chary_y +100>= walls.style.Y && charvolnum < 0 && chary_y+100 >= walls.style.Y +10){
          charvolnum = charvolnum-0.04;
          chary_x = chary_x - volx
      }
      
    }
    else{
      if (chary_y < 300+ tallpeople) {
          charvolnum = charvolnum - 0.04;
        }
        else if (chary_y >= 300+ tallpeople) {
          charvolnum = 0;
          chary_y = 300 + tallpeople;
          chary.style.top = (300 + tallpeople)+ "px";
        }
    }
    chary.style.top = chary_y - charvolnum + "px";
    
  }
  
  grade_1 = document.getElementById("grade_1")
  grade_2 = document.getElementById("grade_2")
  grade_3 = document.getElementById("grade_3")
  grade_4 = document.getElementById("grade_4")
  grade_5 = document.getElementById("grade_5")
  grade_6 = document.getElementById("grade_6")
  grade_7 = document.getElementById("grade_7")
  grade_8 = document.getElementById("grade_8")
  grade_9 = document.getElementById("grade_9")
  grade_10 = document.getElementById("grade_10")
  grade_11 = document.getElementById("grade_11")
  grade_12 = document.getElementById("grade_12")
  grade_13 = document.getElementById("grade_13")
  grade_14 = document.getElementById("grade_14")
  grade_15 = document.getElementById("grade_15")
  grade_16 = document.getElementById("grade_16")
  for(i = 0; i<=15; i++){
    temp = grades[i].getX() - 300
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "board" + i);
    newDiv.style.left = temp + "px";
    newDiv.style.top = (tallpeople + 300) + "px";
    newDiv.style.height = 100 + "px";
    newDiv.style.width = 130 + "px"
    newDiv.style.position = "absolute";
    newDiv.style.X = temp;
    
    newDiv.style.background = "url('./img/pixil-frame-0_("+ i +").png')"
    document.body.insertBefore(newDiv, long_story_block);
  }
  
  chary.style.background = "url('./img/pixil-frame--0.png')"
  function leftright() {
    chary_x = chary_x + volx;
    
    if(counter != 16){
      if(chary_x >= grades[counter].getX() - distance){
        counter = counter + 1;
    console.log(counter)
      }
    }
    
    if(walls.style.X + 300 <= 0){
      walls.setAttribute('class','none')
    }
    if(((chary_x + 65) >= walls.style.X && (chary_x + 65) <= (walls.style.X + 300) && chary_y+90 >= walls.style.Y) || (chary_x  <= walls.style.X + 300 && chary_x  >=walls.style.X  && chary_y+90 >= walls.style.Y)){
      chary_x = chary_x - volx;
    }
    if (chary_x >= (window.innerWidth / 2) - 65 ) {
      chary_x = chary_x - volx;
          distance = distance + volx;
          grade_1.style.left = (grades[0].getX() - distance) + "px";
          grade_2.style.left = (grades[1].getX() - distance) + "px";
          grade_3.style.left = (grades[2].getX() - distance) + "px";
          grade_4.style.left = (grades[3].getX() - distance) + "px";
          grade_5.style.left = (grades[4].getX() - distance) + "px";
          grade_6.style.left = (grades[5].getX() - distance) + "px";
          grade_7.style.left = (grades[6].getX() - distance) + "px";
          grade_8.style.left = (grades[7].getX() - distance) + "px";
          grade_9.style.left = (grades[8].getX() - distance) + "px";
          grade_10.style.left = (grades[9].getX() - distance) + "px";
          grade_11.style.left = (grades[10].getX() - distance) + "px";
          grade_12.style.left = (grades[11].getX() - distance) + "px";
          grade_13.style.left = (grades[12].getX() - distance) + "px";
          grade_14.style.left = (grades[13].getX() - distance) + "px";
          grade_15.style.left = (grades[14].getX() - distance) + "px";
          grade_16.style.left = (grades[15].getX() - distance) + "px";
          grade_1.style.X = (grades[0].getX() - distance );
          grade_2.style.X = (grades[1].getX() - distance);
          grade_3.style.X = (grades[2].getX() - distance);
          grade_4.style.X = (grades[3].getX() - distance);
          grade_5.style.X = (grades[4].getX() - distance);
          grade_6.style.X = (grades[5].getX() - distance);
          grade_7.style.X = (grades[6].getX() - distance);
          grade_8.style.X = (grades[7].getX() - distance);
          grade_9.style.X = (grades[8].getX() - distance);
          grade_10.style.X = (grades[9].getX() - distance);
          grade_11.style.X = (grades[10].getX() - distance);
          grade_12.style.X = (grades[11].getX() - distance);
          grade_13.style.X = (grades[12].getX() - distance);
          grade_14.style.X = (grades[13].getX() - distance);
          grade_15.style.X = (grades[14].getX() - distance);
          grade_16.style.X = (grades[15].getX() - distance);
          controls = document.getElementById('controls')
          controls.style.left = (300 - distance) + "px"
          for(i = 0; i<=15; i++){
            bogger = document.getElementById("board" + i)
            bogger.style.left = (bogger.style.X - distance) + "px"
          }
          for(i=0; i< notadoor.length; i++){
            bogger = document.getElementById("table" + i)
            bogger.style.left = (bogger.style.X - distance) + "px"
          }
          
    }
    else if(chary_x <= 0){
      chary_x = chary_x - volx;
    }
    chary.style.left = chary_x + "px";
  }
  function anime(){
    if(counter >= 0 && counter < 4){
      if(volx > 0){
        chary.style.background ="url('./img/pixil-gif-drawing.gif')";
        chary.style.transform = "scaleX(1)"
      }
      else if(volx < 0){
        chary.style.background ="url('./img/pixil-gif-drawing.gif')";
        chary.style.transform = "scaleX(-1)"
      }}
    else if(counter >=4 && counter < 8){
      if(volx > 0){
        chary.style.background ="url('./img/stage2.gif')";
        chary.style.transform = "scaleX(1)";
      }
      else if(volx < 0){
        chary.style.background ="url('./img/stage2.gif')";
        chary.style.transform = "scaleX(-1)";
      }
    }
    else if(counter >=8 && counter < 12){
      if(volx > 0){
        chary.style.background ="url('./img/stage3.gif')";
        chary.style.transform = "scaleX(1)";
      }
      else if(volx < 0){
        chary.style.background ="url('./img/stage3.gif')";
        chary.style.transform = "scaleX(-1)";
      }
    }
    else if(counter >= 12 && counter <16){
      if(volx > 0){
        chary.style.background ="url('./img/stage4.gif')";
        chary.style.transform = "scaleX(1)";
      }
      else if(volx < 0){
        chary.style.background ="url('./img/stage4.gif')";
        chary.style.transform = "scaleX(-1)";
      }
    }
    else{
      if(volx > 0){
        chary.style.background ="url('./img/stage5.gif')";
        chary.style.transform = "scaleX(1)";
      }
      else if(volx < 0){
        chary.style.background ="url('./img/stage5.gif')";
        chary.style.transform = "scaleX(-1)";
      }
    }
    
    }
  setInterval(jumping, 1);
  setInterval(leftright, 1);

