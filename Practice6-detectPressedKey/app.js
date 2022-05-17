var key = document.querySelector('.key');
var notification = document.querySelector('.notification');
var keyCircle = document.querySelector('.key-circle');
var keyName = document.querySelector('.key-name__text');
var keyLocation = document.querySelector('.key-location__text');
var keyWhich = document.querySelector('.key-which__text');
var keyCode = document.querySelector('.key-code__text');

var pressKey = document.addEventListener('keydown', function(e) {
    console.log(e);
    notification.classList.add('hidden');
    key.classList.remove('hidden');
    keyCircle.innerText = e.which;
    keyName.innerText = e.key;
    keyLocation.innerText = e.location;
    keyWhich.innerText = e.which;
    keyCode.innerText = e.code;
})