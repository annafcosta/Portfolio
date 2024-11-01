// Function to delete social_media in future sections
document.addEventListener("scroll", function () {
    const homeSection = document.querySelector("#home");
    const socialMedia = document.querySelector(".social_media");

    const homePosition = homeSection.getBoundingClientRect();

    if (homePosition.top >= 0 && homePosition.bottom <= window.innerHeight) {
        socialMedia.classList.remove("hidden");
    } else {
        socialMedia.classList.add("hidden");
    }
});
