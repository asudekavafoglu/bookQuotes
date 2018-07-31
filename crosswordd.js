 function randoletters() {

   var table = document.getElementById("puzzel");
   for (var r = 0; r < table.rows.length; r++){
     for(var c = 0; c < 20; c++){
       var cell = table.rows[r].cells[c];
       if(cell.className === "cross"){
         cell.innerHTML = getRandomLetter()
       }
    }
   }
}
function getRandomLetter(){
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomIndex = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
  console.log(randomIndex);
  return letters[randomIndex];
}

function coffee(){
 let word = event.target
 word.style.backgroundColor = "black"
};
function art(){
  let word = event.target
  word.style.backgroundColor = "black"
  };
function novel(){
  let word = event.target
  word.style.backgroundColor = "black"
 };
function genre(){
  let word = event.target
  word.style.backgroundColor = "black"
 };
function literacy(){
  let word = event.target
  word.style.backgroundColor = "black"
 };
function fantasy(){
  let word = event.target
  word.style.backgroundColor = "black"
 };
function essay(){
  let word = event.target
  word.style.backgroundColor = "black"
 };
function philosophy(){
  let word = event.target
  word.style.backgroundColor = "black"
  };
function fiction(){
  let word = event.target
  word.style.backgroundColor = "black"
};
function romanticism(){
  let word = event.target
  word.style.backgroundColor = "black"
 };
function aesthetics(){
  let word = event.target
  word.style.backgroundColor = "black"
  };
function aristotle(){
  let word = event.target
  word.style.backgroundColor = "black"
};
function history(){
  let word = event.target
  word.style.backgroundColor = "black"
}
