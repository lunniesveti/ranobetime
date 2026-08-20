document.addEventListener("DOMContentLoaded", function () {
    const itemList = document.getElementById("itemList");
    const sortFieldRadios = document.querySelectorAll('input[name="sort_field"]');
    const directionRadios = document.querySelectorAll('input[name="direction"]');
  
    let items = [
      { name: "Shiratorizawa", followers: 35595, dataCreating: "18.10.2017", image: "../images/Autumn_leaves.jpg" },
      { name: "Bao Inc.", followers: 20806, dataCreating: "08.02.2019", image: "../images/beginning.jpg"},
      { name: "Сычик против котов", followers: 19439, dataCreating: "30.07.2020", image: "../images/Copper Coins.jpg"},
      { name: "NAHVH", followers: 17571, dataCreating: "11.12.2017", image: "../images/Fairy_Tales.jpg"},
      { name: "InSin", followers: 15956, dataCreating: "21.08.2016", image: "../images/Autumn_leaves.jpg"},
      { name: "Dream Fireworks", followers: 11349, dataCreating: "05.09.2016", image:"../images/Autumn_leaves.jpg" },
      { name: "Sky of love", followers: 11259, dataCreating: "31.08.2016", image: "../images/Autumn_leaves.jpg"},
      { name: "Tea Team", followers: 10502, dataCreating: "30.10.2017", image: "../images/Autumn_leaves.jpg" },
      { name: "Nihon no yume", followers: 23, dataCreating: "17.12.2023", image: "../images/Autumn_leaves.jpg" },
      { name: "Mangaka's", followers: 11, dataCreating: "16.12.2023", image: "../images/Autumn_leaves.jpg" },
      { name: "Friendly Neighbors", followers: 53, dataCreating: "14.12.2023", image: "../images/Autumn_leaves.jpg" },
      { name: "mystery of love team", followers: 10816, dataCreating: "23.11.2023", image: "../images/Autumn_leaves.jpg" },
      { name: "Булочки", followers: 10457, dataCreating: "26.10.2017", image: "../images/Autumn_leaves.jpg" },
      { name: "Vesperum☆", followers: 7904, dataCreating: "18.10.2016", image: "../images/Autumn_leaves.jpg" },
      { name: "Sirenen Lied", followers: 7867, dataCreating: "16.10.2017", image: "../images/Autumn_leaves.jpg" },
      { name: "Akari", followers: 7610, dataCreating: "20.05.2018", image: "../images/Autumn_leaves.jpg" },
    ];
  
    function renderItems() {
      itemList.innerHTML = "";
      items.forEach((item) => {
        const listItem = document.createElement("div");
        listItem.className = "list-item";
        listItem.innerHTML = `
          <div class="translators-group-card">
            <a href="#" class="group-image">
              <img src="${item.image}" alt="#">
            </a>
            <div class="group-profile">
              <div class="group-profile-information">
                <a href="#" class="group-name">${item.name}</a>
                <div class="group-information number">${item.followers} followers</div>
                <div class="group-information data">${item.dataCreating}</div>
              </div>
              <div class="group-profile-follow">
                <button class="follow-button"><i class="fa-solid fa-user-plus"></i>Follow group</button>
              </div>
            </div>
          </div>
        `;
        itemList.appendChild(listItem);
      });
    }
  
    function sortByFollowers(direction) {
      items.sort((a, b) => (direction === "asc" ? a.followers - b.followers : b.followers - a.followers));
    }
  
    function sortByDataCreating(direction) {
      items.sort((a, b) => {
        const dateA = new Date(a.dataCreating.split(".").reverse().join("-"));
        const dateB = new Date(b.dataCreating.split(".").reverse().join("-"));
        return direction === "asc" ? dateA - dateB : dateB - dateA;
      });
    }
  
    function updateItems() {
      const selectedSortField = document.querySelector('input[name="sort_field"]:checked').value;
      const selectedDirection = document.querySelector('input[name="direction"]:checked').value;
  
      if (selectedSortField === "manga_name") {
        sortByFollowers(selectedDirection);
      } else if (selectedSortField === "created_at") {
        sortByDataCreating(selectedDirection);
      }
  
      renderItems();
    }
  
    // Set default sorting to "By Followers" and "Descending"
    document.querySelector('input[name="sort_field"][value="manga_name"]').checked = true;
    document.querySelector('input[name="direction"][value="desc"]').checked = true;
  
    // Initial render
    updateItems();
  
    // Event listeners for sorting options
    sortFieldRadios.forEach((radio) => {
      radio.addEventListener("change", updateItems);
    });
  
    directionRadios.forEach((radio) => {
      radio.addEventListener("change", updateItems);
    });
});
