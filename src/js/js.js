window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.full-screen');
    const links = document.querySelectorAll('.sidebar a');
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        links.forEach(link => link.classList.remove('active'));
        links[index].classList.add('active');
      }
    });
  });
  

const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach((link, index) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.full-screen')[index].scrollIntoView({ behavior: 'smooth' });
  });
});

export function createSquares(container, colors, squares, sizes) {
    const placedSquares = [];
  
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    function doesOverlap(x, y, currentSize) {
      return placedSquares.some(([existingX, existingY, existingSize]) => 
        Math.abs(existingX - x) < (currentSize + existingSize) / 2 && 
        Math.abs(existingY - y) < (currentSize + existingSize) / 2
      );
    }
  
    for (let i = 0; i < squares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');

      const color = colors[randomInt(0, colors.length - 1)];
      square.style.backgroundColor = color;

      const currentSize = sizes[randomInt(0, sizes.length - 1)];
      square.style.width = `${currentSize}px`;
      square.style.height = `${currentSize}px`;
  
      let x, y;
      do {
        x = randomInt(0, container.offsetWidth - currentSize);
        y = randomInt(0, container.offsetHeight - currentSize);
      } while (doesOverlap(x, y, currentSize));
  
      placedSquares.push([x, y, currentSize]);
  
      square.style.left = `${x}px`;
      square.style.top = `${y}px`;
  
      container.appendChild(square);
    }
}

  


  