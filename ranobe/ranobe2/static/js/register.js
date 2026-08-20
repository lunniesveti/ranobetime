"use strick";

let error = document.getElementsByClassName('error')[0];
error.style.color = 'red';
let username = document.getElementsByClassName('username')[0];
let nums = '0123456789';
let all = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890_.-';
let herfler = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

let password1 = document.getElementsByClassName('passwordline')[0];
let password2 = document.getElementsByClassName('againpassword')[1];

let inputs = document.getElementsByTagName('input');
let button = document.getElementsByTagName('button')[0];

let index=1;

if (inputs[1].value.length > 0){
    let label = document.getElementsByTagName('label')[0];
    label.style.marginTop = '-20px';
    label.style.color = '#65b5ff';
}
if (inputs[2].value.length > 0){
    let label = document.getElementsByTagName('label')[1];
    label.style.marginTop = '-20px';
    label.style.color = '#65b5ff';
}

for (let i of inputs){
    
    i.addEventListener('focus',(e)=>{
        let label = e.target.parentElement.getElementsByTagName('label')[0];
        label.style.marginTop = '-20px';
        label.style.color = '#65b5ff';
        if(e.target == inputs[1]){
            index=2;
        }
        if(e.target == inputs[2]){
            index=3;
        }
        if(e.target == inputs[3]){
            index=4;
        }
        if(e.target == inputs[4]){
            index=1;
        }
})
    i.addEventListener('focusout',(e)=>{

        index=1;
        if (i.value.length == 0){
            let label = e.target.parentElement.getElementsByTagName('label')[0];
            label.style.margin = '0px';
            label.style.color = 'rgb(80,80,80)';
        }
    })

    i.addEventListener('input',(e)=>{

        let c=0;
        let d=0;
        let t=0;
        let s=0;
        let cavab='';
        let a = username.value;
        for (let i=0; i<a.length;i++){
            if (herfler.includes(a[i]) && a[i] == a[i].toUpperCase()){
                c+=1;
            }
            if (herfler.includes(a[i]) && a[i] == a[i].toLowerCase()){
                d+=1;
            }
            if (nums.includes(a[i])){
                t+=1;
            }
            if (all.includes(a[i])){
                s+=1;
            }
        }
        if (password1.value.length>0 && password2.value.length>0 && password1.value!=password2.value){
            cavab+='| password not same |';
        }
        // if(c>0 && d>0 && t>0 && s==a.length && a.length>=8){
        //     cavab+='';
        //     error.style.color = 'red';
        // }
        if (t==0){
            cavab+='| adinizda minimum 1 eded reqem olmalidir |';
        }
        if(c==0){
            cavab+='| adinizda minimum 1 eded boyuk herf olmalidir |';
        }
        if(d==0){
            cavab+='| adinizda minimum 1 eded kicik herf olmalidir |';
        }
        if(s<a.length){
            cavab+='| adinizda yalniz "-", "_", ".", ingilis herfleri ve reqemler olmalidir |'
        }
        if(a.length<8){
            cavab+='| adinizda minimum 8 isare olmalidir |'
        }
        error.innerHTML=cavab;

        if (cavab==false && inputs[1].value.length > 0 && inputs[2].value.length > 0 && inputs[3].value.length > 0 && inputs[4].value.length > 0){
            button.removeAttribute('disabled');
        }
        else{
            button.setAttribute('disabled', 'true');
        }
    })
}

addEventListener('keypress',(e)=>{
    if (e.key == 'Enter'){
        inputs[index].focus();
        // index+=1;
    }
    if (index == 5){
        index=1;
    }
})

// let error = document.getElementsByClassName('error')[0];
// let username = document.getElementsByClassName('username')[0];
// let nums = '0123456789';
// let all = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890_.-';
// let herfler = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

// button.onclick = function(){
//     let c=0;
//     let d=0;
//     let t=0;
//     let s=0;
//     let cavab='';
//     let a = username.value;
//     for (let i=0; i<a.length;i++){
//         if (herfler.includes(a[i]) && a[i] == a[i].toUpperCase()){
//             c+=1;
//         }
//         if (herfler.includes(a[i]) && a[i] == a[i].toLowerCase()){
//             d+=1;
//         }
//         if (nums.includes(a[i])){
//             t+=1;
//         }
//         if (all.includes(a[i])){
//             s+=1;
//         }
//     }
//     if(c>0 && d>0 && t>0 && s==a.length && a.length>=8){
//         cavab+='';
//         error.style.color = 'red';
//     }
//     if (t==0){
//         cavab+='| adinizda minimum 1 eded reqem olmalidir |';
//     }
//     if(c==0){
//         cavab+='| adinizda minimum 1 eded boyuk herf olmalidir |';
//     }
//     if(d==0){
//         cavab+='| adinizda minimum 1 eded kicik herf olmalidir |';
//     }
//     if(s<a.length){
//         cavab+='| adinizda yalniz "-", "_", ".", ingilis herfleri ve reqemler olmalidir |'
//     }
//     if(a.length<8){
//         cavab+='| adinizda minimum 8 isare olmalidir |'
//     }
//     error.innerHTML=cavab;
// }