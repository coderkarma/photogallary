

let images = document.querySelectorAll("img");
console.log(images);

images.forEach((image) => image.addEventListener('mouseover', () => {
    image.classList.add = "bigger";
    console.log(image);
}))