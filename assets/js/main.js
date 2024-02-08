const openMenu = document.getElementById('ham-menu');
const closeMenu = document.getElementById('close-menu');
const element = document.getElementById('nav-menu');
const searchBar = document.getElementById('search-bar')
const openSearchBar = document.getElementById('search-btn');
const closeSearchBar = document.getElementById('close-search-btn');



openMenu.addEventListener('click',openM);
closeMenu.addEventListener('click',closeM);

openSearchBar.addEventListener('click',openS);
closeSearchBar.addEventListener('click',closeS);

function openM () {
    // element.style.display = 'block';
    element.style.left = '0';
    
}
function closeM (){
    // element.style.display = 'none';
    element.style.left = '-100%';
}

function openS (){
    // searchBar.style.display = 'block'
    searchBar.style.top = '0'
}
function closeS (){
    // searchBar.style.display = 'none'
    searchBar.style.top = '-100%'
}