// get all img with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

// Intersectional Observer
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

//check to see if IO is supported
if ('IntercestionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions); 

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img)
    });

}
else { //not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}