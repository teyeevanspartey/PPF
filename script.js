function submitForm(event) {
    event.preventDefault();

    alert("Thank you for contacting me! I'll get back to you soon")
}

let scrollPosition = onabort;

function nextSlide() {
    const container = document.getElementById(carousel-container);
    container.querySelector("img").clientWidth + 10;
    scrollPosition += imageWidth * 3; // move by 3 image

    if(scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0;
    }

    container.style.transform = `translateX(${scrollPosition}px)`;

}

function prevSlide() {
    const container = document.getElementById("carousel-container");
    const imageWidth = container.querySelector("img").clientWidth + 10;
    scrollPosition -= imageWidth * 3;
    
    if(scrollPosition < 0) {
        scrollPosition = container.scrollWidth - container.clientWidth;
    }

    container.style.transform =` translateX(-${scrollPosition}px)`;
}
