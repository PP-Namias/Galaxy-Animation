const galaxy = document.getElementById("galaxy");

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = galaxy.offsetWidth - window.innerWidth,
        maxY = galaxy.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  galaxy.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}