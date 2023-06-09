const html = document.documentElement;
const canvas = document.querySelector(".airpods-scrolling");
const context = canvas.getContext("2d");
const currentFrame = index => (
  `img/test${index.toString().padStart(4, '0')}.jpg`
)
const frameCount = 30;
canvas.height=756;
canvas.width=567;
const img = new Image();
img.src = currentFrame(1);
console.log(img);
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};





img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()