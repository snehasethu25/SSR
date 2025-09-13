// Load homes on homes.html
if (document.getElementById("homes-list")) {
  fetch("data.json")
    .then(res => res.json())
    .then(homes => {
      let container = document.getElementById("homes-list");
      homes.forEach(home => {
        let card = document.createElement("div");
        card.className = "bg-white shadow-md p-4 rounded";
        card.innerHTML = `
          <h3 class="text-xl font-bold">${home.name}</h3>
          <p>${home.description}</p>
          <a href="home.html?id=${home.id}" class="text-blue-600">View Details</a>
        `;
        container.appendChild(card);
      });
    });
}

// Load single home on home.html
if (window.location.pathname.endsWith("home.html")) {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");

  fetch("data.json")
    .then(res => res.json())
    .then(homes => {
      let home = homes.find(h => h.id == id);
      if (home) {
        document.getElementById("home-name").innerText = home.name;
        document.getElementById("home-description").innerText = home.description;
        let needsList = document.getElementById("home-needs");
        home.needs.forEach(n => {
          let li = document.createElement("li");
          li.innerText = n;
          needsList.appendChild(li);
        });
      }
    });
}
