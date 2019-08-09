//Header 
window.onscroll = function() {myFunction()};

const header = document.getElementById("myHeader");
const sticky = small.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
    }
}

// Slide show	
let i = 0;
function change_image(){
    document.getElementById("slideshow").src = "assets/img/img"+(i++ % 3)+".jpg";
}
function slider(){
    setTnterval(change_image, 1000)
}

// Img Lobo Pag Principal
const urlApi = 'https://lobinhos-api.herokuapp.com/wolves'

const parseRequestToJSON = (requestResult) => {
    return requestResult.json();
}

fetch(urlApi)
.then (parseRequestToJSON)
.then((responseAsJSON) => {
    let lobinho = document.createElement('div');
    lobinho.className = 'wolfExample';

    let lobinhoImg = document.createElement('div');
    lobo_img.className = 'wolf-img';
    
    let img = document.createElement('img');
    img.src = `${responseAsJSON[1].photo}`;
    lobo_mg.appendChild(img)

    let name = document.createElement('h3');
    name.innerHTML = `${responseAsJSON[1].name}`

    let age = document.createElement('h5');
    age.innerHTML = `Idade: ${responseAsJSON[1].age} anos`;

    let description = document.createElement('p');
    description.innerHTML = `${responseAsJSON[1].description}`;

    lobinho.appendChild(lobo_img);
    lobinho.appendChild(name);
    lobinho.appendChild(age);
    lobinho.appendChild(description);
    const allWolfs = document.querySelector('#exampleWolf');
    allWolfs.appendChild(lobinho);
});