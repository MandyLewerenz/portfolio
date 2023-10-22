window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.container-fluid');
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
    document.querySelectorAll('.container-fluid')[index].scrollIntoView({ behavior: 'smooth' });
  });
});
