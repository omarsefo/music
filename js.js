class Play{
    constructor(){
        var heg =document.getElementById("playr");
        heg.style.height =screen.height + "px";
        if(screen.width<620){
            heg.style.width = screen.width +"px";
        }
        var vid =document.getElementById("cont");
        vid.style.height = screen.height-300+"px";
    }
}
onload = new Play();

   var audioo =document.getElementById("audioo");
   var titlea =document.getElementById("pp");
   var i2 =document.getElementById("i2");
   var i1 =document.getElementById("i1");
   var i3 =document.getElementById("i3");

   var isplay =false;

   var namee =[];
   namee[0]="Flo Rida Wild Ones ft.Sia";
   namee[1]="Sia Im Still Here";
   namee[2]="Sia High Life ft. Rihanna";
   namee[3]="Sia Elastic Heart";
   namee[4]="LSD Genius ft.Sia Diplo Labrinth";
   namee[5]="LSD Thunderclouds ft. Sia Dipl";
   namee[6]="LSD No New Friends ft. Labrinth";

   var srcc =[];
   srcc[0]="music/Flo_Rida_Wild_Ones_ft.Sia.mp3";
   srcc[1]="music/Sia_I_m_Still_Here.mp3";
   srcc[2]="music/Sia_High_Life_ft._Rihanna.mp3";
   srcc[3]="music/Sia_Elastic_Heart.mp3";
   srcc[4]="music/LSD_Genius_ft.Sia_Diplo_Labrinth.mp3";
   srcc[5]="music/LSD_Thunderclouds_ft. Sia_Dipl.mp3";
   srcc[6]="music/LSD_No New Friends_ft. Labrinth.mp3";

var cou = 0;


function numb() {
    if (localStorage.getItem("savee")!= null){
        cou=localStorage.getItem("savee");
    }
    titlea.innerHTML = namee[cou];
    audioo.src = srcc[cou];
}
function play_pause(){
    if (isplay == false) {
        isplay = true;
        audioo.play();
        sc();
    }else{
        isplay = false;
        audioo.pause();
        sc2();
    }
}
i2.addEventListener('click',play_pause);
onload = numb();

    i3.addEventListener("click",()=>{
        if (cou < srcc.length-1) {
            ++cou;
        }else{
            cou = 0;
        }
        localStorage.setItem("savee",cou);
        numb();
        sc2();
    })
    i1.addEventListener("click",()=>{
        if (cou >0) {
            --cou;
        }else{
            cou = srcc.length-1;
        }
        localStorage.setItem("savee",cou);
        numb();
        sc2();
    })


function iconn() {
    if (i2.classList.contains("fa-play")) {
        sc();
    }
    else{
        sc2();
    }
 }
function sc(){
    i2.classList.add("fa-pause");
    i2.classList.remove("fa-play");
}
function sc2(){
    i2.classList.remove("fa-pause");
    i2.classList.add("fa-play");
}

var inp1 =document.getElementById("inp1");
var inp2 =document.getElementById("inp2");
var btn =document.querySelector('button');

inp1.addEventListener('change',()=>{
    audioo.volume=inp1.value/100;
});
inp2.addEventListener('change',()=>{
    audioo.playbackRate = inp2.value/100;
});
btn.addEventListener('click',()=>{
     inp2.value=100;
     audioo.playbackRate = inp2.value/100;
});
var ci1 =document.getElementById("ci1");
var ci2 =document.getElementById("ci2");
var ci3 =document.getElementById("ci3");
var ci4 =document.getElementById("ci4");
var main =document.getElementById("playr");

 
ci1.addEventListener("click",()=>{
    document.body.style.background="#ccc"
main.style.background="linear-gradient(to right, #c6ff22, #fbd786, #f7797d) "
});

ci2.addEventListener("click",()=>{
    document.body.style.background=" #ffcd28"
main.style.background=" linear-gradient(to right, #8a2300, #e94057, #f27121)"
});

ci3.addEventListener("click",()=>{
    document.body.style.background=" #444444"
main.style.background=" linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)"
});

ci4.addEventListener("click",()=>{
    document.body.style.background="#28ffc9"
main.style.background="linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)"
});

VanillaTilt.init(document.querySelector(".img"), {
    max: 25,
    speed: 550
});

