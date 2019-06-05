//var cities = ["New York City", "Paris", "Rome", "London", "Berlin", "Jerusalem", "Prague" "Amsterdam", "Amsterdam", "Madrid", "Munich", "Vienna", "Washington DC"]

var mycars = ['Herr','Frau'];
var list = document.getElementById('anrede');

mycars.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});
