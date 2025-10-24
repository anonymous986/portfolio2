// Theme toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
  
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (category === 'all' || projectCategory === category) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
  