let accordion =document.getElementsByClassName('accordion');
let desc =document.getElementsByClassName('desc');


for(let i=0; i<desc.length; i++){

    accordion[i].addEventListener('click',function(){
        desc[i].classList.toggle('none');
    
    })
    

}

