document.addEventListener('DOMContentLoaded', function() {
  displaySites();
});

function displaySites() {
  let sites = JSON.parse(localStorage.getItem('sites') || '[]');
  let sitesListContainer = document.getElementById('sites-list');
  sitesListContainer.innerHTML = ''; 

  sites.forEach(site => {
      let siteElement = document.createElement('li');
      siteElement.textContent = site;
      sitesListContainer.appendChild(siteElement);
  });
}