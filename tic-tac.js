document.addEventListener("DOMContentLoaded", function () {
   var buttons = document.querySelectorAll('.btn');
   var message = document.querySelector('#msg');
   var reset = document.querySelector('#reset');
   const winpatterns=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
   ];
   let turnO = true;
   let winnerdeclare=false;
   const showwinner=(winner)=>
   {
      message.innerText=`Congratulations , winner is ${winner}`;
      winnerdeclare=true;
      buttons.forEach(button=>button.disabled=true);
      
 };
   
   const checkwinner=()=>{
      for(let pattern of winpatterns)
      {
         let posval1= buttons[pattern[0]].innerText;
         let posval2= buttons[pattern[1]].innerText;
         let posval3= buttons[pattern[2]].innerText;
         if(posval1!=""&&posval2!=""&&posval3!="")
         {
            if(posval1===posval2&&posval2===posval3)
            {
               showwinner(posval1);
               
            }
         }

      }
   }
   buttons.forEach(function (button) {
       button.addEventListener('click', function () {

           if (turnO) {
               button.innerText = "O";
               turnO = false;
               button.disabled=true;
           } else {
               button.innerText = "X";
               turnO = true;
               button.disabled=true;
           }
           checkwinner();
           
       });
   });
   reset.addEventListener('click',function (){
            buttons.forEach(function(button){
               button.innerText="";
               message.innerText="";
               button.disabled=false;
               
            });
   });
});
