
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

// Variables

var ul   =  vr('.ul'),
    f    =  vr('.f'),
    bt2  =  vr('#bt2'),
    bt   =  vr("#bt");



// Function For Work

function fd(c,text){
    f.style.display = 'flex';
    f.className = `f ${c}`;
    f.textContent = `${text}`;
}

function chebt(){
    if(ul.children.length > 0){
        bt2.style.display = 'block';
    }
    else{
        bt2.style.display = 'none';
    }
}


document.body.addEventListener('click',click)

function click(e){

    if(e.target.classList.contains('fa-times')){
        e.target.parentElement.remove()
        rmv1(e.target.previousElementSibling.textContent)
        fd('f2','Project is Deleted')
    }

    else if (e.target.id == 'bt'){
        var t = true,
        text = vr('.in').value;
        var a = vt('.a')
        
        if (text == ''){
            t = false;
            fd('f1','Enter Any Name For Project')
            
        }

        else if (a.length > 0){
            for(i=0;i < a.length;i++){
                if (a[i].textContent == text){
                    t = false
                    fd('f1','The Project Is Already Exists')
                    
                }
            }
        }

        if (t == true){

            crli(vr('.in').value)

            if (localStorage.getItem('projects') == null){
                projects = []
            }
            else{
                projects = JSON.parse(localStorage.getItem('projects'));
            }

            projects.push(vr('.in').value)
            localStorage.setItem('projects',JSON.stringify(projects))
        }   

        vr('.in').value = ''

    }

    else if(e.target.id == 'bt2'){
        let yl = ul.children.length;
        for(i=yl-1;i >= 0;i--){
            ul.children[i].remove()
            rmvall()
            fd('f2','All Projects is Deleted')
        }
        
    }

    chebt()
}


function crli(text){
    var t = true
    var a = vt('.a')
    
    if (text == ''){
        t = false;
        fd('f1','Enter Any Name For Project')
        
    }

    else if (a.length > 0){
        for(i=0;i < a.length;i++){
            if (a[i].textContent == text){
                t = false
                fd('f1','The Project Is Already Exists')
                
            }
        }
    }

    if (t == true){
        let projects ; 
        var li = cral('li');
        li.innerHTML = `<div class='a'>${text}</div><i class='fas fa-times i2'></>`;

        li.className = 'li';
        
        ul.appendChild(li)
        chebt()
        

        

    }
    
    
}


function rmv1(text){
    let projects;
    let y = localStorage.getItem('projects');
    s = JSON.parse(y)
    if( y== null){
        projects = []
    }
    else{
        for(i=0;i < s.length;i++){
            if (s[i] == text){
                s.splice(i,1)
            }
        }
    }

    localStorage.setItem('projects',JSON.stringify(s))

    
}

function rmvall(){
    let projects = [];

    localStorage.setItem('projects',JSON.stringify(projects))

}


update()
function update(){
    let projects;
    
    
    if( localStorage.getItem('projects') == null){
        projects = []
    }
    else{
        projects = JSON.parse(localStorage.getItem('projects'));
    }

    for(i=0;i < projects.length;i++){
        crli(projects[i])
    }
}
