const imageSources = ['bl1.jpg','bp.jpg','bl5.jpg','bl2.jpg','bl3.jpg','bl4.jpg','bl8.jpg','bl7.jpg',bl9.jpg','black.jpg','bl10.jpg',];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);