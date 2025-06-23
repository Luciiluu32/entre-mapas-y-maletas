// Menú dinámico desde Netlify CMS
fetch('config.json')
  .then(res => res.json())
  .then(config => {
    const menu = document.getElementById('main-menu');
    config.menu.forEach(item => {
      const link = document.createElement('a');
      link.href = '#' + item.id;
      link.textContent = item.label;
      link.style.margin = '0 15px';
      menu.appendChild(link);
    });
  });
