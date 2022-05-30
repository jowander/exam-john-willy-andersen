"use strict"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const postIdUrl = "https://www.willyandersen.com/wp-json/wp/v2/posts?include=" + id;

const blogSpecificPost = document.querySelector(".wordpress-specific-post");

async function specificPost() {
    try {
        const response = await fetch(postIdUrl);
        const apiResponse = await response.json();

        const image = apiResponse[0].featured_media_src_url;

        createHtml(apiResponse, image);
        getImage();
    } catch (error) {
        blogSpecificPost.innerHTML = error;
    }
}


specificPost();

function createHtml(post, img) {
    blogSpecificPost.innerHTML = "";
    blogSpecificPost.innerHTML += 
                                    `
                                    <div class="specific-card">
                                        <div class="specific-post-item">
                                            <h2 class="specific-post-header">${post[0].title.rendered}</h2>
                                            <div class="image">
                                                <img src="${img}" id="myImg" alt="${post[0].better_featured_image.alt_text}"/>
                                            </div>
                                            <div class="btn-container">
                                                <a href="/contact.html" class="contact-btn">Contact Me</a>
                                                <a href="/about.html" class="about-btn">About Me</a>
                                            </div>
                                            <p>${post[0].excerpt.rendered}</p>
                                        </div>
                                    </div>
                                    `;
}

// Modal
const modal = document.querySelector(".modal");
const modalImage = document.querySelector("#modal-img");
const modalOpenBtn = document.querySelector(".modal-open-btn");


function getImage() {
    const img = document.querySelector("#myImg");
    img.addEventListener("click", handleEvent);
}

function handleEvent() {
    modal.style.display = "block";
    modalImage.style.display = "block";
    modalImage.src = this.src;
}

modalOpenBtn.addEventListener("click", openModal);
window.addEventListener("click", outsideClick);

function openModal() {
    modal.style.display = "block";
    modalImage.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    modalImage.style.display = "none";
}

function outsideClick(e) {
    if (e.target === modal) {
    closeModal();
    }
}