
let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px -00px 0px'
}

const loadImages = (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
        img.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                loadImages(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    imagesToLoad.forEach((image) => {
        observer.observe(image);
    });
} else {
    imagesToLoad.forEach((image) => {
        loadImages(image);
    });
}


