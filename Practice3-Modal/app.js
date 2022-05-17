var openModal = document.querySelector('.btn');
var appModal = document.querySelector('.app');   
var iconModal = document.querySelector('.modal__heading-icon i');
var closeModal = document.querySelector('.modal__close button');

openModal.onclick = function() {
    appModal.classList.toggle('hidden')
}

iconModal.onclick = function() {
    appModal.classList.toggle('hidden')
}

closeModal.onclick = function() {
    appModal.classList.toggle('hidden')
}

appModal.onclick = function(e) {
    if(e.target == e.currentTarget) {
        appModal.classList.toggle('hidden')
    }
}

