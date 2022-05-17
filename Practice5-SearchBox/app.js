var searchBox = document.querySelector('.search');
var searchBtn = document.querySelector('.search-btn');
var input = document.querySelector('input');

searchBtn.addEventListener('click', function() {
    searchBox.classList.toggle('open');
    input.focus();
})