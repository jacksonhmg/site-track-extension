document.addEventListener("DOMContentLoaded", function() {
  // Fetch the stored sites and display them in the popup
  chrome.storage.local.get(['sites'], (result) => {
      let sites = result.sites || [];
      let siteList = document.getElementById("siteList"); // Assuming you have a list or div with this ID

      sites.forEach(site => {
          let listItem = document.createElement("li");
          let url = site.replace(/https?:\/\/([^/]+)\/.*/, '$1');
          listItem.textContent = url;
          siteList.appendChild(listItem);
      });
  });
});
