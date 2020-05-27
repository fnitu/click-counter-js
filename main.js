var element = document.getElementById('content');
var counter = 0;

var counterElement = document.getElementById('counterResult');
counterElement.innerHTML = counter + ' clicks';
// console.log(element);
element.addEventListener('click', function () {
    //console.log('click');
    counter = counter + 1;
    //console.log(counter);
    counterElement.innerHTML = counter + ' clicks';
});
