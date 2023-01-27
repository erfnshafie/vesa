document.querySelectorAll(".image-container. img-container")
.forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-imagee").style.display = "bock";
    document.querySelector(".popup-imagee .imggg").src =
      image.getAttribute("src");
  };
});
document.querySelector(".popup-imagee span").onclick = () => {
document.querySelector(".popup-imagee").style.display = "none";
}