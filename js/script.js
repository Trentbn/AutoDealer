const theNav = document.querySelector("#theNav");
const theButton = document.querySelector("#theButton");

theButton.addEventListener("click", () => {
    theButton.classList.toggle("open");
    theNav.classList.toggle("open");
})

import {reviews} from "../data/reviews.js";
console.log(reviews);

const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.length; x++) {
    //Create section
    const mySection = document.createElement("section");
    const myName = document.createElement("h3");
    myName.textContent = reviews[x].customer_name;

    //Review
    const myReview = document.createElement("p");
    myReview.textContent = reviews[x].comment;

    //Rating section
    const myRating = document.createElement("div");

    

    //Star amount loop
    for (let step = 0; step<reviews[x].star_rating; step ++) {
        const star = document.createElement("img");
        star.src = "../images/star.svg"
        myRating.appendChild(star);
    }


    //build figure with child elements
    mySection.appendChild(myName);
    mySection.appendChild(myRating)
    mySection.appendChild(myReview);

    //add new card to page
    myTarget.appendChild(mySection);
}