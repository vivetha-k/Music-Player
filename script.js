
const images = [

    {
        id: 1,
        title: "Mountain Lake",
        category: "mountains",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 2,
        title: "Ocean Waves",
        category: "beaches",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 3,
        title: "Forest Adventure",
        category: "nature",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 4,
        title: "City Architecture",
        category: "architecture",
        url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 5,
        title: "Cute Puppy",
        category: "animals",
        url: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 6,
        title: "Beautiful Flowers",
        category: "flowers",
        url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 7,
        title: "Travel Destination",
        category: "travel",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 8,
        title: "Luxury Car",
        category: "cars",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 9,
        title: "Space Galaxy",
        category: "space",
        url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 10,
        title: "Delicious Food",
        category: "food",
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 11,
        title: "Snow Mountains",
        category: "mountains",
        url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 12,
        title: "Tropical Beach",
        category: "beaches",
        url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 13,
        title: "Green Forest",
        category: "nature",
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 14,
        title: "Modern Building",
        category: "architecture",
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 15,
        title: "Wild Elephant",
        category: "animals",
        url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=85"
    },

   {
    id: 16,
    title: "Pink Flowers",
    category: "flowers",
    url: "https://images.unsplash.com/photo-1492981564641-ab59d661b021?auto=format&fit=crop&w=1000&q=85"
},
{
    id: 17,
    title: "Colorful Flowers",
    category: "flowers",
    url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Colorful_flowers_in_bloom_%28Unsplash%29.jpg/960px-Colorful_flowers_in_bloom_%28Unsplash%29.jpg"
},
    {
        id: 18,
        title: "Classic Car",
        category: "cars",
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 19,
        title: "Night Sky",
        category: "space",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 20,
        title: "Fresh Breakfast",
        category: "food",
        url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 21,
        title: "Mountain Sunrise",
        category: "mountains",
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 22,
        title: "Blue Lagoon",
        category: "beaches",
        url: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 23,
        title: "Autumn Nature",
        category: "nature",
        url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 24,
        title: "City Lights",
        category: "architecture",
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 25,
        title: "Beautiful Cat",
        category: "animals",
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1000&q=85"
    },

  {
    id: 26,
    title: "White Rose",
    category: "flowers",
    url: "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=1000&q=85"
},

    {
        id: 27,
        title: "Adventure Trip",
        category: "travel",
        url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 28,
        title: "Sports Car",
        category: "cars",
        url: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 29,
        title: "Galaxy Stars",
        category: "space",
        url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 30,
        title: "Italian Pasta",
        category: "food",
        url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 31,
        title: "Rocky Mountains",
        category: "mountains",
        url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85"
    },

   {
    id: 32,
    title: "Sunny Coast",
    category: "beaches",
    url: "https://images.unsplash.com/photo-1760212357806-b37a88f5fbbc?auto=format&fit=crop&w=1000&q=85"
},

    {
        id: 33,
        title: "Green Landscape",
        category: "nature",
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 34,
        title: "Glass Architecture",
        category: "architecture",
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 35,
        title: "Wild Tiger",
        category: "animals",
        url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=85"
    },
    {
    id: 36,
    title: "Travel Adventure",
    category: "travel",
    url: "https://images.unsplash.com/photo-1773997128521-eb4d1e065a45?auto=format&fit=crop&w=1000&q=85"
},


    {
        id: 37,
        title: "Road Trip",
        category: "travel",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 38,
        title: "Red Supercar",
        category: "cars",
        url: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=85"
    },

      {
    id: 39,
    title: "Milky Way Beach",
    category: "space",
    url: "https://images.unsplash.com/photo-1755381155528-3a4a6e2e79f4?auto=format&fit=crop&w=1000&q=85"
},

    {
        id: 40,
        title: "Dessert Time",
        category: "food",
        url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85"
    }

];
const galleryGrid =
    document.getElementById("galleryGrid");

const favoritesGrid =
    document.getElementById("favoritesGrid");

const favoritesSection =
    document.getElementById("favoritesSection");

const emptyFavorites =
    document.getElementById("emptyFavorites");

const favoriteCount =
    document.getElementById("favoriteCount");

const searchInput =
    document.getElementById("searchInput");

const categoryFilters =
    document.getElementById("categoryFilters");

const clearFilter =
    document.getElementById("clearFilter");

const resultText =
    document.getElementById("resultText");

const noResults =
    document.getElementById("noResults");

const resetSearch =
    document.getElementById("resetSearch");

const favoritesBtn =
    document.getElementById("favoritesBtn");

const themeToggle =
    document.getElementById("themeToggle");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const lightbox =
    document.getElementById("lightbox");

const lightboxOverlay =
    document.getElementById("lightboxOverlay");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const lightboxCounter =
    document.getElementById("lightboxCounter");

const lightboxFavorite =
    document.getElementById("lightboxFavorite");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");
let currentCategory = "all";

let currentSearch = "";

let currentImages = [...images];

let currentLightboxIndex = 0;


let favorites =
    JSON.parse(
        localStorage.getItem("pixoraFavorites")
    ) || [];


const savedTheme =
    localStorage.getItem("pixoraTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀";

} else {

    themeToggle.textContent = "☾";

}


function renderGallery() {

    const filteredImages =
        getFilteredImages();

    currentImages = filteredImages;

    galleryGrid.innerHTML = "";

    if (filteredImages.length === 0) {

        noResults.hidden = false;

        resultText.textContent =
            "No images found";

        clearFilter.hidden = false;

        return;

    }

    noResults.hidden = true;

    clearFilter.hidden =
        !(currentCategory !== "all" || currentSearch);

    resultText.textContent =
        `${filteredImages.length} beautiful ${
            filteredImages.length === 1
                ? "image"
                : "images"
        }`;

    filteredImages.forEach(
        (image, index) => {

            galleryGrid.appendChild(
                createImageCard(image, index)
            );

        }
    );

}


function getFilteredImages() {

    return images.filter(image => {

        const categoryMatch =
            currentCategory === "all" ||
            image.category === currentCategory;

        const searchMatch =
            image.title
                .toLowerCase()
                .includes(
                    currentSearch.toLowerCase()
                ) ||

            image.category
                .toLowerCase()
                .includes(
                    currentSearch.toLowerCase()
                );

        return categoryMatch && searchMatch;

    });

}


function createImageCard(image, index) {

    const card =
        document.createElement("article");

    card.className = "image-card";

    const isFavorite =
        favorites.includes(image.id);

    card.innerHTML = `

        <div class="image-wrapper">

            <img
                src="${image.url}"
                alt="${image.title}"
                loading="lazy"
            >

            <div class="image-overlay">

                <button
                    class="favorite-btn ${
                        isFavorite ? "active" : ""
                    }"
                    data-id="${image.id}"
                    aria-label="Favorite"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>

            <button
                class="view-btn"
                data-index="${index}"
            >
                View Image
            </button>

        </div>

        <div class="image-info">

            <h3>${image.title}</h3>

            <p>${image.category}</p>

        </div>

    `;

    const favoriteButton =
        card.querySelector(".favorite-btn");

    favoriteButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleFavorite(image.id);

        }
    );

    const viewButton =
        card.querySelector(".view-btn");

    viewButton.addEventListener(
        "click",
        () => {

            openLightbox(index);

        }
    );

    const imageElement =
        card.querySelector("img");

    imageElement.addEventListener(
        "click",
        () => {

            openLightbox(index);

        }
    );


    return card;

}

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

        showToast("Removed from favorites ♡");

    } else {

        favorites.push(id);

        showToast("Added to favorites ♥");

    }

    localStorage.setItem(
        "pixoraFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();

    renderGallery();

    renderFavorites();

    updateLightboxFavorite();

}

function updateFavoriteCount() {

    favoriteCount.textContent =
        favorites.length;

}

function renderFavorites() {

    favoritesGrid.innerHTML = "";

    const favoriteImages =
        images.filter(
            image => favorites.includes(image.id)
        );


    if (favoriteImages.length === 0) {

        emptyFavorites.style.display =
            "block";

        return;

    }


    emptyFavorites.style.display =
        "none";


    favoriteImages.forEach(image => {

        const card =
            createFavoriteCard(image);

        favoritesGrid.appendChild(card);

    });

}

function createFavoriteCard(image) {

    const card =
        document.createElement("article");

    card.className = "image-card";


    card.innerHTML = `

        <div class="image-wrapper">

            <img
                src="${image.url}"
                alt="${image.title}"
                loading="lazy"
            >

            <div class="image-overlay">

                <button
                    class="favorite-btn active"
                    aria-label="Remove favorite"
                >
                    ♥
                </button>

            </div>

            <button class="view-btn">
                View Image
            </button>

        </div>

        <div class="image-info">

            <h3>${image.title}</h3>

            <p>${image.category}</p>

        </div>

    `;


    const favoriteButton =
        card.querySelector(".favorite-btn");

    favoriteButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleFavorite(image.id);

        }
    );


    const viewButton =
        card.querySelector(".view-btn");

    viewButton.addEventListener(
        "click",
        () => {

            const favoriteIndex =
                currentImages.findIndex(
                    item => item.id === image.id
                );

            if (favoriteIndex !== -1) {

                openLightbox(favoriteIndex);

            } else {

                currentImages = favoriteImagesArray();

                const index =
                    currentImages.findIndex(
                        item => item.id === image.id
                    );

                openLightbox(index);

            }

        }
    );


    const imageElement =
        card.querySelector("img");

    imageElement.addEventListener(
        "click",
        () => {

            currentImages =
                favoriteImagesArray();

            const index =
                currentImages.findIndex(
                    item => item.id === image.id
                );

            openLightbox(index);

        }
    );


    return card;

}


function favoriteImagesArray() {

    return images.filter(
        image => favorites.includes(image.id)
    );

}



categoryFilters.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".category-btn"
            );

        if (!button) return;


        document
            .querySelectorAll(".category-btn")
            .forEach(btn => {

                btn.classList.remove("active");

            });


        button.classList.add("active");


        currentCategory =
            button.dataset.category;


        renderGallery();

    }
);

searchInput.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value.trim();

        renderGallery();

    }
);

clearFilter.addEventListener(
    "click",
    resetAllFilters
);

resetSearch.addEventListener(
    "click",
    resetAllFilters
);


function resetAllFilters() {

    currentCategory = "all";

    currentSearch = "";

    searchInput.value = "";


    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    document
        .querySelector(
            '[data-category="all"]'
        )
        .classList.add("active");


    renderGallery();

}

favoritesBtn.addEventListener(
    "click",
    () => {

        favoritesSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-mode"
        );


        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );


        themeToggle.textContent =
            isDark ? "☀" : "☾";


        localStorage.setItem(
            "pixoraTheme",
            isDark ? "dark" : "light"
        );

    }
);

function openLightbox(index) {

    if (
        !currentImages.length ||
        index < 0 ||
        index >= currentImages.length
    ) {
        return;
    }


    currentLightboxIndex = index;


    updateLightbox();


    lightbox.classList.add("active");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}
function updateLightbox() {

    const image =
        currentImages[currentLightboxIndex];


    if (!image) return;


    lightboxImage.src =
        image.url;

    lightboxImage.alt =
        image.title;

    lightboxTitle.textContent =
        image.title;

    lightboxCategory.textContent =
        image.category;

    lightboxCounter.textContent =
        `${currentLightboxIndex + 1} / ${
            currentImages.length
        }`;


    updateLightboxFavorite();

}
function updateLightboxFavorite() {

    const image =
        currentImages[currentLightboxIndex];


    if (!image) return;


    const isFavorite =
        favorites.includes(image.id);


    lightboxFavorite.textContent =
        isFavorite ? "♥" : "♡";


    lightboxFavorite.classList.toggle(
        "active",
        isFavorite
    );

}

function showNextImage() {

    if (!currentImages.length) return;


    currentLightboxIndex =
        (currentLightboxIndex + 1) %
        currentImages.length;


    updateLightbox();

}

function showPreviousImage() {

    if (!currentImages.length) return;


    currentLightboxIndex =
        (
            currentLightboxIndex -
            1 +
            currentImages.length
        ) %
        currentImages.length;


    updateLightbox();

}

function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}

nextBtn.addEventListener(
    "click",
    showNextImage
);

prevBtn.addEventListener(
    "click",
    showPreviousImage
);

lightboxClose.addEventListener(
    "click",
    closeLightbox
);

lightboxOverlay.addEventListener(
    "click",
    closeLightbox
);


lightboxFavorite.addEventListener(
    "click",
    () => {

        const image =
            currentImages[currentLightboxIndex];

        if (!image) return;

        toggleFavorite(image.id);

    }
);

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            showNextImage();

        }


        if (event.key === "ArrowLeft") {

            showPreviousImage();

        }

    }
);

let toastTimer;


function showToast(message) {

    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2200);

}

updateFavoriteCount();

renderGallery();

renderFavorites();

console.log(
    "✨ Pixora Image Gallery loaded successfully!"
);