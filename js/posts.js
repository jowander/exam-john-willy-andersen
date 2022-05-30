"use strict"
let apiUrl = "https://www.willyandersen.com/wp-json/wp/v2/posts/";

const blogPosts = document.querySelector(".wordpress-posts");

async function displayPosts(url) {
    let apiUrl =  url

    try {
        const response = await fetch(apiUrl);
        const apiResponse = await response.json();

        blogPosts.innerHTML = "";
        
        for (let i = 0; i < apiResponse.length; i++) {

            blogPosts.innerHTML += 
                                    `
                                    <li class="posts-card">
                                        <div class="posts-item">
                                            <h2 class="posts-heading"><a href="/specific-post.html?id=${apiResponse[i].id}">${apiResponse[i].title.rendered}</a></h2>
                                            <div class="posts-image">
                                                <a class="image-container" href="/specific-post.html?id=${apiResponse[i].id}">
                                                    <img src="${apiResponse[i].featured_media_src_url}" alt="${apiResponse[i].better_featured_image.alt_text}"/>
                                                </a>
                                            </div>
                                            <div class="btn-container">
                                                <a href="/contact.html" class="contact-btn">Contact Me</a>
                                                <a href="/about.html" class="about-btn">About Me</a>
                                            </div>
                                            <p>${apiResponse[i].better_featured_image.alt_text}</p>
                                        </div>
                                    </li>
                                    `;
            
        }
    } catch (error) {
        blogPosts.innerHTML = error;
    }
}

// Load more posts
const seeMoreButton = document.querySelector(".see-more");

const seeMoreUrl = apiUrl + "?per_page=20";

seeMoreButton.addEventListener("click", () => {
    seeMoreButton.style.display = "none";
    displayPosts(seeMoreUrl);
});


displayPosts(apiUrl);
