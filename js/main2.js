
/* function search(arr,text){
    var l = [];

    for (i=0;i < arr.length;i++){
        console.log(arr)
        if (text == arr[i]){
            l.push(i);
        }
    }

    return l;
}*/

// Variables

var i1 = document.querySelector('#i1'),
    i2 = document.querySelector('#i2'),
    d1 = document.querySelector('.btn'),
    f1 = document.querySelector('#wt');


// Data

acc = ['hamzalahyane54@gmail.com','raidhamza26@gmail.com','admin@gmail.com',]
pw  = ['123456','hamza','admin']


function prs(e){
    var r = String.fromCharCode(e.keyCode);
    

    if (r == '$' || r == '!' || r == '#' || r == '(' || r == ')' || r == '+' || 
        r == '=' || r == '-' || r == '_' || r == '*' || r == '&' || r == '^' || 
        r == '`' || r == '~' || r == '.' || r == '%' || r == '\''|| r == ';' ||
        r == ':' || r == ',' || r == '<' || r == '>' || r == '/' || r == '?' ||
        r == '|' || r == '"' || r == '{' || r == '}' || r == '[' || r == ']' ||
        r == '\\' ){
            
            f1.className = 'f f1';
            f1.textContent = 'This tag is not allowed ';
            e.preventDefault()
    }

    

    else{
        f1.className = 'f ';       
        f1.textContent = '';
            
    }
    
}

d1.onclick = function (){
    // Account

    var w = acc.indexOf(`${i1.value}`);
    var p = false;
    var n = false;

    if (w != '-1'){
        p = true;
        if (pw[w] == i2.value){
            f1.className = 'f f2';
            f1.textContent = 'Email and Password is Correct'
            n = true;
        }
        
        
    }

    
    



    // Consition
    

    if (p == false){
        f1.className = 'f f1';
        f1.textContent = 'Email is not correct';
    }

    else if (n == false){
        f1.className = 'f f1';
        f1.textContent = 'Password is not correct';
    }
}

    




