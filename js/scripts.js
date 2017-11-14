// Łąńcuchy znaków
var list = document.getElementById('list');
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var n = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + n;
	list.appendChild(element);
});