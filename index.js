document.getElementById("hello").addEventListener("click", myFunction);

function myFunction(){
  var happy = prompt("Please enter a combination of 6 characters" /n/ "the characters can be 1, 2, 3, 4, 5, 6, a, b, c, d, e, or f", "Enter Here");
if (happy != null) {
    document.body.style.color = happy;
}
}

/*function myFunction(){
  alert('hi');
}*/
