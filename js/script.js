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

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
      const element = document.getElementById(id),
            text = element.innerText.split("");
      
      element.innerText = "";
      
      text.forEach((value, index) => {
      const outer = document.createElement("span");
      
      outer.className = "outer";
      
      const inner = document.createElement("span");
      
      inner.className = "inner";
      
      inner.style.animationDelay = `${rand(-5000, 0)}ms`;
      
      const letter = document.createElement("span");
      
      letter.className = "letter";
      
      letter.innerText = value;
      
      letter.style.animationDelay = `${index * 1000 }ms`;
      
      inner.appendChild(letter);    
      
      outer.appendChild(inner);    
      
      element.appendChild(outer);
      });
}


enhance("github-link");