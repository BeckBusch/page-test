document.getElementById("hello").addEventListener("click", myFunction);

function myFunction(){
  var happy = prompt("Please enter a combination of 6 characters", "Enter Here");
   document.body.style.color = happy;
}
