const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const url = "https://picsum.photos/v2/list?limit=100";

const getImage = async () => {
    const res = await fetch(url);
    const image = await res.json();
    console.log(image);
}

getImage();