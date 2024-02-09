const openMenu = document.getElementById('ham-menu');
const closeMenu = document.getElementById('close-menu');
const element = document.getElementById('nav-menu');
const shadow = document.querySelector('.page-overlay')
const searchBar = document.getElementById('search-bar')
const openSearchBar = document.getElementById('search-btn');
const closeSearchBar = document.getElementById('close-search-btn');
const shop = document.getElementById('shopping');

const shopData = [
    {
        "id": 1,
        "image":"./assets/img/008_c_d9ab8cb4-5ebc-4585-adfc-d6cd40789e89_360x.jpg",
        "title" : "placeholder",
        "cost": "sold"
    },
    {
        "id": 2,
        "image":"./assets/img/008_c_d9ab8cb4-5ebc-4585-adfc-d6cd40789e89_360x.jpg",
        "title" : "placeholder",
        "cost": "sold"
    },
    {
        "id": 3,
        "image":"./assets/img/008_c_d9ab8cb4-5ebc-4585-adfc-d6cd40789e89_360x.jpg",
        "title" : "placeholder",
        "cost": "sold"
    },
    {
        "id": 4,
        "image":"./assets/img/008_c_d9ab8cb4-5ebc-4585-adfc-d6cd40789e89_360x.jpg",
        "title" : "placeholder",
        "cost": "sold"
    },
    {
        "id": 5,
        "image":"./assets/img/008_c_d9ab8cb4-5ebc-4585-adfc-d6cd40789e89_360x.jpg",
        "title" : "placeholder",
        "cost": "sold"
    },
    {
        "id": 6,
        "image": "./assets/img/008_c_d9ab8cb4-5ebc-4585-adfc-d6cd40789e89_360x.jpg",
        "title" : "placeholder",
        "cost": "sold"
    }
]


const renderPosts = () =>{
    shopData.map((item) => {
    const card = document.createElement("div")
    card.classList.add("card","col-lg-3","col-md-4","border-0","shopping-item")
    card.innerHTML = `
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.cost}</p>
    </div>
    `
    shop.appendChild(card)
})
}
renderPosts()


openMenu.addEventListener('click',openM);
closeMenu.addEventListener('click',closeM);

openSearchBar.addEventListener('click',openS);
closeSearchBar.addEventListener('click',closeS);

function openM () {
    // element.style.display = 'block';
    shadow.style.display = 'block'
    element.style.left = '0';
    
}
function closeM (){
    // element.style.display = 'none';
    shadow.style.display = 'none';
    element.style.left = '-100%';
}

function openS (){
    // searchBar.style.display = 'block'
    searchBar.style.top = '0';
    shadow.style.display = 'block';
}
function closeS (){
    // searchBar.style.display = 'none'
    searchBar.style.top = '-100%';
    shadow.style.display = 'none';
}
const transfer = document.getElementsByClassName('.card')

// transfer.addEventListener('click',function(){
//     window.open('./assets/pages/shop-item.html')
// })


