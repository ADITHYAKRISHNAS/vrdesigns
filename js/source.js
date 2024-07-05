document.addEventListener("DOMContentLoaded", () => {
    // script.js content
    const carousel = document.querySelector(".carousel"),
        firstImg = carousel.querySelectorAll("img")[0],
        arrowIcons = document.querySelectorAll(".wrapper i");

    let isDragStart1 = false, isDragging1 = false, prevPageX, prevScrollLeft, positionDiff;

    const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    };

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = firstImg.clientWidth + 14;
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
        });
    });

    const autoSlide = () => {
        if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 14;
        let valDifference = firstImgWidth - positionDiff;
        if (carousel.scrollLeft > prevScrollLeft) {
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    };

    const dragStart1 = (e) => {
        isDragStart1 = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    };

    const dragging1 = (e) => {
        if (!isDragStart1) return;
        e.preventDefault();
        isDragging1 = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    };

    const dragStop1 = () => {
        isDragStart1 = false;
        carousel.classList.remove("dragging");
        if (!isDragging1) return;
        isDragging1 = false;
        autoSlide();
    };

    carousel.addEventListener("mousedown", dragStart1);
    carousel.addEventListener("touchstart", dragStart1);
    document.addEventListener("mousemove", dragging1);
    carousel.addEventListener("touchmove", dragging1);
    document.addEventListener("mouseup", dragStop1);
    carousel.addEventListener("touchend", dragStop1);

    // hello.js content
    const thewrapper = document.querySelector(".thewrapper");
    const thecarousel = document.querySelector(".thecarousel");
    const firstCardWidth = thecarousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".thewrapper i");
    const thecarouselChildrens = [...thecarousel.children];

    let isDragging2 = false,
        isAutoPlay = true,
        startX,
        startScrollLeft,
        timeoutId;

    let cardPerView = Math.round(thecarousel.offsetWidth / firstCardWidth);

    thecarouselChildrens.slice(-cardPerView).reverse().forEach((card) => {
        thecarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    thecarouselChildrens.slice(0, cardPerView).forEach((card) => {
        thecarousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    thecarousel.classList.add("no-transition");
    thecarousel.scrollLeft = thecarousel.offsetWidth;
    thecarousel.classList.remove("no-transition");

    arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            thecarousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart2 = (e) => {
        isDragging2 = true;
        thecarousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = thecarousel.scrollLeft;
    };

    const dragging2 = (e) => {
        if (!isDragging2) return;
        thecarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop2 = () => {
        isDragging2 = false;
        thecarousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
        if (thecarousel.scrollLeft === 0) {
            thecarousel.classList.add("no-transition");
            thecarousel.scrollLeft = thecarousel.scrollWidth - 2 * thecarousel.offsetWidth;
            thecarousel.classList.remove("no-transition");
        } else if (Math.ceil(thecarousel.scrollLeft) === thecarousel.scrollWidth - thecarousel.offsetWidth) {
            thecarousel.classList.add("no-transition");
            thecarousel.scrollLeft = thecarousel.offsetWidth;
            thecarousel.classList.remove("no-transition");
        }
        clearTimeout(timeoutId);
        if (!thewrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => (thecarousel.scrollLeft += firstCardWidth), 2400);
    };
    autoPlay();

    thecarousel.addEventListener("mousedown", dragStart2);
    thecarousel.addEventListener("mousemove", dragging2);
    document.addEventListener("mouseup", dragStop2);
    thecarousel.addEventListener("scroll", infiniteScroll);
    thewrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    thewrapper.addEventListener("mouseleave", autoPlay);
});


