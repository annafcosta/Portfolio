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

// Functions to enable and disable project information
function showPopup(targetId) {
    const popup = document.getElementById(targetId);
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        popup.classList.remove("hidden");
        overlay.style.display = "block";
    }
}

function hidePopup(targetId) {
    const popup = document.getElementById(targetId);
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        popup.classList.add("hidden");
        overlay.style.display = "none";
    }
}

const openButtons = document.querySelectorAll(".read-more");
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        showPopup(targetId);
    });
});

const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        hidePopup(targetId);
    });
});

document.getElementById('overlay').addEventListener("click", () => {
    const popup = document.querySelector(".popup:not(.hidden)");
    if (popup) {
        hidePopup(popup.id);
    }
});


