const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const url = "https://picsum.photos/v2/list?limit=100";

const getImage = async () => {
    const res = await fetch(url);
    const images = await res.json();
    //console.log(images);
    selectRandomImg(images);
}

const selectRandomImg = (images) => {
    const randIndex = Math.floor(Math.random() * images.length);
    //console.log(randIndex);
    const randImage = images[randIndex];
   // console.log(randImage);
    displayImage(randImage);
}

const displayImage = (randImage) => {
    const author = randImage.author;
    const imgAddress = randImage.download_url;
    //console.log(author);
    authorSpan.innerText = author;
    img.src = imgAddress;
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", () => {
    getImage();
});


