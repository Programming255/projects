
function vr(text){
    return document.querySelector(text)
}

function vt(text){
    return document.querySelectorAll(text)
}


function cral(text){
    return document.createElement(text);
}


function crtx(text){
    return document.createTextNode(text);
}

// start 
var arr = []
function add(){
    var t = false;
    var inp = vr('.in');
    var b2 = vr('#bt2');

    function btn(){
        if(arr.length < 1){
            b2.style.display = 'none';
        }
        else{
            b2.style.display = 'block';
        }
    }

    if (inp.value == ''){
        vr('.f').className = 'f f1';
        vr('.f').textContent = 'Enter Any Name For Project';
        t = true;
    }

    else if(arr.length > 0){
        for(i=0;i < arr.length;i++){
            if (arr[i] == inp.value){
                vr('.f').className = 'f f1';
                vr('.f').textContent = 'The Project Is Already Exists';
                t = true;
                break
            }
        }
    }

    
    if(t == false) {
        arr.push(inp.value);
        btn()
        


        vr('.f').className = 'f f2';
        vr('.f').textContent = 'The Project is Added';
        var ul = vr('.ul'),
        li = cral('li'),
        a  = cral('a'),
        i  = cral('i');

        // Text
        ti = crtx(`${inp.value}`)

        // Attribute
        li.className = 'li';
        i.className = 'fas fa-times i2';

        i.onclick = function(){
            
            var u = this.previousElementSibling.textContent;
            arr.splice(arr.indexOf(u),arr.indexOf(u)+2)
            this.parentElement.remove()
            
            vr('.f').className = 'f f2';
            vr('.f').textContent = 'The Project Is Deleted';
            btn()
            
        }

        
    
        // Add Element
        a.appendChild(ti)
        li.appendChild(a)
        li.appendChild(i)
        ul.appendChild(li)

        vr('#bt2').onclick = function(){
            var l = ul.children.length;
            
            for(i=l-1;i >= 0;i--){
                ul.children[i].remove()
            }
            arr = [];
            btn()
            vr('.f').className = 'f f2';
            vr('.f').textContent = 'All Projects Is Deleted';
        }
    }
    

}









