
let inp = document.querySelector('.in');
var t = 5;
function vr(text){
    t = document.querySelector(text);
    return t;
}


if (screen.width <= 450){
    inp.onfocus = function (){
        vr('.d').style.display = 'none';
        vr('.nav2').style.display = 'none';
        vr('.w3').style.display = 'none';
        vr('.nav1').style.cssText = 'grid-template-columns:1fr;background:white;height:12%;';



        vr('.in').style.cssText = '\
            border:none ;           \
            width:70%;               \
            border-radius:0px;\
            right:15%;\
            border:2px solid #eee;\
            height:60%;\
        ';
        
        vr('.is').style.cssText =    "\
            right:5%;\
            color:black;\
        ";

        vr('.ia').style.cssText = "";
    }
}


function clk(){
        vr('.d').style.display = 'block';
        vr('.nav2').style.display = 'block';
        vr('.w3').style.display = 'flex';
        vr('.nav1').style.cssText = '\
            grid-template-columns: 60% 40%;\
            background:linear-gradient(to bottom,black,rgb(65, 63, 63));\
        ';



        vr('.in').style.cssText = '\
            border:none ;           \
            width:100%;               \
            border-radius:15px;\
            right:0%;\
            height:70%;\
        ';
        
        vr('.is').style.cssText =    "\
            left:5%;\
            color:orange;\
        ";

        vr('.ia').style.cssText = "display:none;";
        
}