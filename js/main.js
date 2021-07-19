
let inp = document.querySelector('.in');
var t = 5;

function vr(text){
    t = document.querySelector(text);
    return t;
}


function foc(){
    
    var media = window.matchMedia('(max-width:450px)')

    if (media.matches){
        console.log(document.body.clientWidth)
        
        vr('.d').style.display = 'none';
        vr('.nav2').style.display = 'none';
        vr('.w3').style.display = 'none';
            
        vr('.nav1').style.cssText = 'grid-template-columns:1fr;background:white;height:12%;';



        vr('.in').style.cssText = '\
            border:none ;           \
            width:70%;              \
            border-radius:0px;\
            right:15%;\
            border:2px solid #eee;\
            height:60%;\
        ';
        
        vr('.is').style.cssText =    "\
            right:5%;\
            color:black;\
        ";
        vr('.w1').style.cssText = 'display:none';
        vr('#ia').style.display = "block";   
    }

    
}

window.onresize = function (){
    var m = window.matchMedia('(min-width:450px)');
    console.log(screen.width)
    if (m.matches) {
        console.log(document.body.clientWidth)
        vr('#ia').style.display = 'none';
        clk()
}
}



function clk(){
        vr('.w1').style.cssText = '';
        vr('.d').style.display = 'block';
        vr('.nav2').style.display = 'block';
        vr('.w3').style.display = 'flex';
        vr('.nav1').style.cssText = '';



        vr('.in').style.cssText = '';
        
        vr('.is').style.cssText =   '';


        vr('.ia').style.cssText = "display:none;";
        
}