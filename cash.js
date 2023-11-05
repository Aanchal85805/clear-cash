var bill = document.querySelector("#bill-amount")
var cash = document.querySelector("#cash-given")
const btn = document.querySelector("#button")
const noOfNotes = document.querySelectorAll(".noOfNotes")
const message = document.querySelector("#error-message")

const availableNotes =[2000, 500, 100, ,20, 10, 5 ,1]

btn.addEventListener("click" , function validateBill(){
      message.style.display = "none";
      if (bill.value > 0){
         if(cash.value >= bill.value){
            var amountToBeGiven = cash.value - bill.value;
          calculateChange(amountToBeGiven);
         }else{
         errorMessage("The cash would be atleast equal to bill amount")
         }
   }else{
         errorMessage("Invalid Bill Amount")   
   }

   });
      function calculateChange(amountToBeGiven){
        for(let i = 0 ; i<availableNotes.length; i++){
            var numberOfNotes = Math.trunc(
               amountToBeGiven / availableNotes[i]
               );
                amountToBeGiven %= availableNotes[i];
               noOfNotes[i].innerText = numberOfNotes;
            

         }

      }

      function errorMessage(msg){
         message.style.display ="block"
            message.innerText = msg; 
   }

