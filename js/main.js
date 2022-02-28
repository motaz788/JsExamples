let accordion =document.getElementsByClassName('accordion');
let desc =document.getElementsByClassName('desc');



for(let i=0; i<desc.length; i++){

    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');

        if(desc[i].style.height == 0){
            desc[i].style.height = desc[i].scrollHeight+'px'
        }else{
            desc[i].style.height = null;
        }
    
    })
    

}

let thumbanilimg =document.querySelectorAll('.thumbanil img');
let previewimg =document.querySelector('.preview img');




for(let i = 0; i<thumbanilimg.length; i++){ 


thumbanilimg[i].addEventListener('click',function(){


    previewimg.src = thumbanilimg[i].src



})
}

let counter = document.getElementsByClassName('counter');


for(let i =0 ; i< counter.length ; i++){ 

    let updateCount =()=>{

            
let target = +counter[i].getAttribute('data-target');
let c = +counter[i].innerText;

let speed = target / 100

if (c < target ){

    counter[i].innerText = c + speed ;
    setTimeout(updateCount , 10)
}else {
    c.innerText = target 
}







    }
 updateCount();

}