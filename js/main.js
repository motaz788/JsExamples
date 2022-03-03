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


let counter =document.getElementsByClassName('counter');


for( let i = 0 ; i<counter.length ; i++){ 

  let updateCount =()=>{

    let target = +counter[i].getAttribute('data-target');

    let c = +counter[i].innerText;
     
    let speed = target / 100;
 
    if (c < target){

        counter[i].innerText = c + speed;
        setTimeout(updateCount , 10)
    }else{
        c.innerText = target 
    }

  }
 
  updateCount();

 }

 

 let openBtn =document.getElementById('openBtn');

 let addModel =document.getElementById('add-modal');
 let backdrop =document.getElementById('backdrop');

 let cancelBtn=document.getElementById('cancelBtn');
 let inputData = document.querySelectorAll('.modal__content input');
 let addBtn = document.getElementById('addBtn');
 let movieList =document.getElementById('movie-list');
 let entrytext =document.getElementById('entry-text');




 let movies = [];

 let checkMoviesMessage =()=>{

    if(movieList.childElementCount > 0){
         entrytext.classList.add('none')
    }else{
         entrytext.classList.remove('none')
    }
 }


 let openbackdrop=()=>{

    backdrop.classList.toggle('visible');


 }


let openmodelMOvie =()=>{

    addModel.classList.toggle('visible');
    openbackdrop();
}


let renderMovie =(title , img , rate )=>{
  movieList.innerHTML =`  
   <li class='movie-element'> 
    <div class="movie-element__image">
     <img src="${img}">
    
    </div>
   <div class='movie-element__info'>
   <h2>${title}</h2>
   <p>${rate}/5 star</p>

   </div>
   <button class="btn btn-- passive delete ">Delete </button>
   </li>

  `

}

let addMovie =()=>{

       let titleMovie = inputData[0].value;
       let imgMovie  = inputData[1].value;
       let rateMovie = inputData[2].value;   

    if(titleMovie.trim()==''|| imgMovie.trim ==''|| +rateMovie < 0 || +rateMovie >5 ){

        alert('please enter valid Data')
    }else {  
         let  movieobject = {  

        tile : titleMovie,
        imgUrl : imgMovie,
        rate : rateMovie ,
    
     }
 movies.push(movieobject);

 renderMovie(movieobject.tile, movieobject.imgUrl , movieobject.rate);
 openmodelMOvie();
 checkMoviesMessage();

}
}

document.addEventListener('click', function(e){

    if(e.target.classList.contains('delete')){
        if(confirm()){   
            e.target.parentElement.remove();
            checkMoviesMessage();
        }else{

        }
    }



})



 openBtn.addEventListener('click', openmodelMOvie)
 cancelBtn.addEventListener('click', openmodelMOvie)
 backdrop.addEventListener('click',openmodelMOvie ) 
 addBtn.addEventListener('click', addMovie)