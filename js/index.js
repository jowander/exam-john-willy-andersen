"use strict"
const apiUrl = "https://www.willyandersen.com/wp-json/wp/v2/posts/";

const blogSlider = document.querySelector(".wordpress-slider");

async function carouselPosts() {
    try {
        const response = await fetch(apiUrl);
        const apiResponse = await response.json();

        blogSlider.innerHTML = "";
        
        for (let i = 0; i < apiResponse.length; i++) {
            if (i === 4) {
                break;
            }
            
            blogSlider.innerHTML += 
                                    `
                                    <div class="carousel-item">
                                        <h2><a href="/specific-post.html?id=${apiResponse[i].id}">${apiResponse[i].title.rendered}</a></h2>
                                        <div class="image">
                                            <a href="/specific-post.html?id=${apiResponse[i].id}">
                                                <img src="${apiResponse[i].featured_media_src_url}" alt="${apiResponse[i].better_featured_image.alt_text}"/>
                                            </a>
                                        </div>
                                    </div>
                                    `;
        }
    } catch (error) {
        blogSlider.innerHTML = error;
    } finally {
       handleSlides();
    }
}


carouselPosts();

// Carousel
let slidePosition = 0;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const carouselDot = document.querySelector(".carousel-dot");
const hamburgerMenu = document.querySelector(".nav-links");
const hamburgerDropDown = document.querySelector(".hamburger");
const hamburgerLinks = document.querySelectorAll(".link");

function handleSlides(){
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    
    nextBtn.addEventListener("click", () => {moveToNextSlide(slides, totalSlides)});
    prevBtn.addEventListener("click", () => {moveToPrevSlide(slides, totalSlides)});
    
    updateSlidePosition(slides, slidePosition);
}

function updateSlidePosition(slides, slidePosition) {
    console.log(slidePosition);
    for (let slide of slides) {
        slide.classList.remove("carousel-item--visible");
        slide.classList.add("carousel-item--hidden");
    }
    slides[slidePosition].classList.add("carousel-item--visible");
}

function updateDots() {
    
}

function moveToNextSlide(slides, totalSlides) {
    if (slidePosition === totalSlides - 1) {
       slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition(slides, slidePosition);
}

function moveToPrevSlide(slides, totalSlides) {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
      } else {
        slidePosition--;
      }
     updateSlidePosition(slides, slidePosition);
}


function hamburgerToggle() {
    console.log(hamburgerMenu);
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
    } 
}

hamburgerDropDown.addEventListener("click", hamburgerToggle);




// 

//?_fields[]=title

//?_embed&?page/