function vr(text){
    return document.querySelector(text);
}

function vr2(text){
    return document.querySelectorAll(text);
}


function foc(){
    
    var md = window.matchMedia('(max-width:468px)');
    if (md.matches){
        vr('.nav2').style.cssText = 'display:none';
        vr('.nav1').style.cssText = 'background:white;grid-template-columns:1fr;';
        vr('.d').style.cssText = 'display:none';
        vr('.w3').style.cssText = 'display:none';
        vr('.w1').style.cssText = 'justify-content:space-between;';
        vr('.in').style.cssText = '\
        border:none;\
        border-right:1px solid #eee;\
        border-radius: 0px;\
        width: 70%;\
        margin-right:13%;\
        ';

        vr('.lk').style.display = 'block';

        vr('#sh').style.cssText = 'color:black;right:15px;;';
        vr('.ia').style.cssText = 'display: block;';
        vr('.d2').style.cssText = 'display: none;';

        vr('.in').onkeyup = function(){
            
            for(i=0;i < vr2('.pj1').length;i++){
                var t = vr2('.pj1')[i].innerHTML.toLowerCase();
                var h = vr('.in').value.toLowerCase();


                if(t.indexOf(h) != 0 ){
                    vr2('.pj1')[i].style.display = 'none'
                }

                else{
                    vr2('.pj1')[i].style.display = 'flex'
                }
            }
        }

    }
    
}

function clk(){
        vr('.nav2').style.cssText = '';
        vr('.nav1').style.cssText = '';
        vr('.d').style.cssText = '';
        vr('.w3').style.cssText = '';
        vr('.w1').style.cssText = '';
        vr('.in').style.cssText = '';

        vr('#sh').style.cssText = '';
        vr('.ia').style.cssText = '';
        vr('.d2').style.cssText = '';
        vr('.lk').style.display = 'none';




}

window.onresize = function(){
    var md = window.matchMedia('(min-width:468px)');
    var md2 = window.matchMedia('(max-width:468px)');
    if (md.matches){
        clk()
    }


    
}


