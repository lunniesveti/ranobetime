"use strick";

let index=1;
let inputs = document.getElementsByTagName('input');
let button = document.getElementsByTagName('button')[0];

for (let i of inputs){
    i.addEventListener('focus',(e)=>{
        let label = e.target.parentElement.getElementsByTagName('label')[0];
        label.style.marginTop = '-20px';
        label.style.color = '#65b5ff';
        if(e.target == inputs[1]){
            index=2;
        }
        if(e.target == inputs[2]){
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
        if (inputs[1].value.length > 0 && inputs[2].value.length > 0){
            button.removeAttribute('disabled');
        }
        else{
            button.setAttribute('disabled','true');
        }
    })
}

addEventListener('keypress',(e)=>{
    if(index==3){
        index=1;
    }
    if (e.key == 'Enter'){
        inputs[index].focus();
    }
})