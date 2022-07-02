let movies = [
    {
        name: "falcon and the winter soldier", 
        descri : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquam voluptatibus molestias quasi modi doloribus quas facere tempora nobis veritatis omnis, quae possimus magnam adipisci eligendi quod officia dolores molestiae Architecto perferendis illum ipsam, ipsa ipsum quisquam voluptates excepturi cumque commodi earum iure, aspernatur inventore nihil consequuntur animi dolores assumenda a harum atque accusantium placeat provident. Minus harum praesentium deserunt.",
        image: "./images/slider 2.png"
    },
    {
        name: "loki", 
        descri : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquam voluptatibus molestias quasi modi doloribus quas facere tempora nobis veritatis omnis, quae possimus magnam adipisci eligendi quod officia dolores molestiae Architecto perferendis illum ipsam, ipsa ipsum quisquam voluptates excepturi cumque commodi earum iure, aspernatur inventore nihil consequuntur animi dolores assumenda a harum atque accusantium placeat provident. Minus harum praesentium deserunt.",
        image: "./images/slider 1.png"
    },
    {
        name: "wanda vision", 
        descri : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquam voluptatibus molestias quasi modi doloribus quas facere tempora nobis veritatis omnis, quae possimus magnam adipisci eligendi quod officia dolores molestiae Architecto perferendis illum ipsam, ipsa ipsum quisquam voluptates excepturi cumque commodi earum iure, aspernatur inventore nihil consequuntur animi dolores assumenda a harum atque accusantium placeat provident. Minus harum praesentium deserunt.",
        image: "./images/slider 3.png"
    },
    {
        name: "luca", 
        descri : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquam voluptatibus molestias quasi modi doloribus quas facere tempora nobis veritatis omnis, quae possimus magnam adipisci eligendi quod officia dolores molestiae Architecto perferendis illum ipsam, ipsa ipsum quisquam voluptates excepturi cumque commodi earum iure, aspernatur inventore nihil consequuntur animi dolores assumenda a harum atque accusantium placeat provident. Minus harum praesentium deserunt.",
        image: "./images/slider 5.png"
    },
    {
        name: "raya and the last dragon", 
        descri : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aliquam voluptatibus molestias quasi modi doloribus quas facere tempora nobis veritatis omnis, quae possimus magnam adipisci eligendi quod officia dolores molestiae Architecto perferendis illum ipsam, ipsa ipsum quisquam voluptates excepturi cumque commodi earum iure, aspernatur inventore nihil consequuntur animi dolores assumenda a harum atque accusantium placeat provident. Minus harum praesentium deserunt.",
        image: "./images/slider 4.png"
    },
]


//endless carousel
const carousel = document.querySelector('.carousel');

let sliders = []; 

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // DOM element

    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all ele's
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].descri));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // set img
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting element classname
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-descri';

    sliders.push(slide);

    // Sliding efedt
    if(sliders.length){
       sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i < 3; i++){
    createSlide();
}

setInterval(() =>{
    createSlide();
}, 3000)

// Video  Cards
const videoCards =  [...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover', () =>{
        let video = item.children[1];
        video.play();
    })

    item.addEventListener('mouseleave', () =>{
        let video = item.children[1];
        video.pause();
    })
})


// movie card
let cardContainers = [...document.querySelectorAll('.movie-container')];
let preBtns = [...document.querySelectorAll('.prebtn')];
let nxtBtns = [...document.querySelectorAll('.nxtbtn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})