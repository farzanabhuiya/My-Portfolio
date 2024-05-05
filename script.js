// $(document).ready(function(){
//   alert('hello')
// })



$(document).ready(function(){
    var manus = $('.manu');
  manus.each(function(){
   $(this).click(function(){
   
    $(this).removeClass('text-xolor');
    $(this).addClass("text-xolor");
   })





   
    

  });

    // var typed = new Typed('.type', {
    //   strings: ["First sentence.", "Second sentence."],
    //   typeSpeed: 30,
    //   loop:true
    // });

  let msg = ['Frontend developer','HTML',"CSS","Javascript JS","Tailwind css","and bootstrap",'Backend Developer',"PHP","Laravel","My Sql"];
  
  let count = 0;

let counter = 0;


  setInterval(function(){

let array  = msg[count];


let anim = array.slice(0,counter++);
let text3= $(".text").text();


$(".text").text(anim);

if(text3.length==array.length){
   count++;
   counter=0;

}

if(msg.length==count){
  count=0;

}

 


  },100)


        

  let side = document.querySelector("#side");
let manu = document.querySelector("#manu");
manu.addEventListener("click",function(){
 side.classList.toggle('toggle-icon');


 let manu2 = document.querySelector("#manu");
 let remove = document.querySelector("#remove");

})

// skill animation
// // for html


let a  = 0;

  function html(skill){

    let htmlskill  = setInterval(()=>{
      let b = a++;
    
      if(b==skill){
        clearInterval(htmlskill)
      }
    
      $('#html').text(b+'%')
    
    },10)
  
  
  }
  
  html(70)



  // css


let c  = 0;

  function css(skill){

    let htmlskill  = setInterval(()=>{
      let b = c++;
    
      if(b==skill){
        clearInterval(htmlskill)
      }
    
      $('#css').text(b+'%')
    
    },10)
  
  
  }
  
  css(70)



// Javascrift
let j  = 0;
  function Javascrift(skill){

    let htmlskill  = setInterval(()=>{
      let b = j++;
    
      if(b==skill){
        clearInterval(htmlskill)
      }
    
      $('#Javascrift').text(b+'%')
    
    },10)
  
  
  }
  
  Javascrift(40)







// Jquery

let jq = 0;

function Jquery(skill){

  let htmlskill  = setInterval(()=>{
    let b = jq++;
  
    if(b==skill){
      clearInterval(htmlskill)
    }
  
    $('#Jquery').text(b+'%')
  
  },10)


}

Jquery(50)


// Bootstrap



let boots = 0;

function Bootstrap(skill){

  let htmlskill  = setInterval(()=>{
    let b = boots++;
  
    if(b==skill){
      clearInterval(htmlskill)
    }
  
    $('#Bootstrap').text(b+'%')
  
  },10)


}

Bootstrap(70)



// Tailwind
let Tai = 0;

function Tailwind(skill){

  let htmlskill  = setInterval(()=>{
    let b = Tai++;
  
    if(b==skill){
      clearInterval(htmlskill)
    }
  
    $('#Tailwind').text(b+'%')
  
  },10)


}

Tailwind(50)


// backend development

// php

let ph = 0;

function php(skill){

  let htmlskill  = setInterval(()=>{
    let b = ph++;
  
    if(b==skill){
      clearInterval(htmlskill)
    }
  
    $('#php').text(b+'%')
  
  },10)


}

php(50)

// laravel

let la = 0;

function laravel(skill){

  let htmlskill  = setInterval(()=>{
    let b = la++;
  
    if(b==skill){
      clearInterval(htmlskill)
    }
  
    $('#laravel').text(b+'%')
  
  },10)


}

laravel(75)


// sql
let my = 0;

function mysql(skill){

  let htmlskill  = setInterval(()=>{
    let b = my++;
  
    if(b==skill){
      clearInterval(htmlskill)
    }
  
    $('#sql').text(b+'%')
  
  },10)


}

mysql(70)






// active color


})





// let elements = document.querySelectorAll('#navmanu');
// let currentlocation = location.href;
// console.log(currentlocation);

// for (var i = 0; i < elements.length; i++) {
// elements[i].addEventListener('click',()=>{

//   // console.log(elements[i])
//   // elements[i].classList.add('hello')

//       if (elements[i].href==currentlocation) {
//       elements[i].addClass='hellooooooooo'
//       } 
    
 
// })

 
//  }







// elements.forEach((elements)=>{

//   elements.addEventListener('click',()=>{

//     // elements.classList.remove('hello')

//     if (elements.classList.contains('hello')==false) {
//       elements.addClass='hello';
//       // alert('The element has the "highlight" class!');
//     } 
    






//     // elements.classList.remove('hello')
      
//     })

// })  


// about section filter

const filterable_button= document.querySelectorAll('.filter-button button');

const filter_card = document.querySelectorAll('.filter-card .card');

// console.log(filter_button,filter_card)

function filtercard(event){



  filter_card.forEach(card=>{

    card.classList.add('card-active');
    // card.classList.remove('block');
    if(event.target.dataset.name === card.dataset.name){
      card.classList.remove('card-active');
      card.classList.remove('hide');
      // console.log(card.dataset.name)
      


    }
  })

}

filterable_button.forEach(button=>button.addEventListener("click",filtercard));


// latest project

let button_card = document.querySelectorAll(".button-card button");

let all_service_card = document.querySelectorAll('.all-service-card .ecommerce');


function buttoncard(event){
let service_button_color = document.querySelector('.service-button-color')
service_button_color.classList.remove('service-button-color');
  event.target.classList.add('service-button-color');

  all_service_card.forEach(singleservice=>{
  
    singleservice.classList.add('hide');
    
    if(event.target.dataset.name === singleservice.dataset.name || event.target.dataset.name==='all' ){
      singleservice.classList.remove('hide');


    }
  })

}




button_card.forEach(button=>button.addEventListener('click',buttoncard))






 


















 
    
 

  


