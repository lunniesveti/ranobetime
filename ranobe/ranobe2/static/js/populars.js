document.addEventListener('DOMContentLoaded', function () {
    let items = [
      { category: "Popular", name: "Shiratorizawa", followers: 35595, image: "../images/Lord_of_Mysteries.jpg" },
      { category: "Popular", name: "Bao Inc.", followers: 20806, image: "../images/like_cold_more.jpg"},
      { category: "Popular", name: "Сычик против котов", followers: 19439, image: "../images/Heroic_Death_System.jpg"},
      { category: "Popular", name: "NAHVH", followers: 17571, image: "..images/Lord_of_Mysteries.jpg"},
      { category: "Popular", name: "InSin", followers: 15956, image: "../images/Lord_of_Mysteries.jpg"},
      { category: "Popular", name: "Dream Fireworks", followers: 11349, image:"../images/Lord_of_Mysteries.jpg" },
      { category: "Popular", name: "Sky of love", followers: 11259, image: "../images/Lord_of_Mysteries.jpg"},
      { category: "Popular", name: "Tea Team", followers: 10502, image: "../images/Lord_of_Mysteries.jpg" },
      { category: "New", name: "Nihon no yume", followers: "17.12.2023", image: "../images/Lord_of_Mysteries.jpg" },
      { category: "New", name: "Mangaka's", followers: "16.12.2023", image: "../images/Lord_of_Mysteries.jpg" },
      { category: "New", name: "Friendly Neighbors", followers: "14.12.2023", image: "../Lord_of_Mysteries.jpg" },
      { category: "New", name: "mystery of love team", followers: "23.11.2023", image: "../images/Lord_of_Mysteries.jpg" },
      { category: "New", name: "Булочки", followers: "12.10.2023", image: "../images/Lord_of_Mysteries.jpg" },
      { category: "New", name: "Vesperum☆", followers: "03.10.2023", image: "../images/Lord_of_Mysteries.jpg" },
      { category: "New", name: "Sirenen Lied", followers: "17.09.2023", image: "../images/Lord_of_Mysteries.jpg" },
      { category: "New", name: "Akari", followers: "09.09.2023", image: "../images/Lord_of_Mysteries.jpg" },
    ];
  
    // Function to render the card list
    function renderCardList(translators) {
      let cardList = document.getElementById('cardList');
      cardList.innerHTML = '';
  
      translators.forEach(item => {
        let cardListItem = document.createElement('div');
        cardListItem.classList.add('card-list_item');
        cardListItem.innerHTML = `
        <a href="#">
            <div class="avatar">
                <img src="${item.image}" alt="#">
            </div>
            <div class="name">
                <p>${item.name}</p>
            </div>
            <div class="followers-number">
                <p>${item.followers || ''}</p>
            </div>
            <div class="creating-date">
                <p>${item.creatingData || ''}</p>
            </div>
      </a>
        `;
        cardList.appendChild(cardListItem);
      });
    }
  
    // Function to sort translators by popularity (followers) or newest (creatingData)
    function sortTranslators(sortBy) {
      let sortedItems;
  
      if (sortBy === 'popularity') {
        sortedItems = items
          .filter(item => item.category === 'Popular')
          .sort((a, b) => b.followers - a.followers);
      } else if (sortBy === 'newest') {
        sortedItems = items
          .filter(item => item.category === 'New')
          .sort((a, b) => new Date(a.creatingData || '') - new Date(b.creatingData || ''));
      }
  
      return sortedItems;
    }
  
    // Event listeners for tab buttons
    document.querySelector('.nav-button.is-active').addEventListener('click', function () {
      let sortedTranslators = sortTranslators('popularity');
      renderCardList(sortedTranslators);
    });
  
    document.querySelector('.nav-button:not(.is-active)').addEventListener('click', function () {
      let sortedTranslators = sortTranslators('newest');
      renderCardList(sortedTranslators);
    });
  
    // Initial rendering
    let initialSortedTranslators = sortTranslators('popularity');
    renderCardList(initialSortedTranslators);
  });

  