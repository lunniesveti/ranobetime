document.addEventListener('DOMContentLoaded', function () {
    let items = [

      { category: "Language", language: "Chinese", miniSynopsis: "Cultivation, Enlightenment Dao, Sects, Chinese tradition, Jade beauties, Confronting heaven, Old virgins"},
      { category: "Language", language: "Japanese", miniSynopsis: "Rebirth in Items, Hitanders, Cat girls, Unusual names of novels, Bunch of virgins, Many fantasy worlds"},
      { category: "Language", language: "Korean", miniSynopsis: "Systems, Level Up, Dungeons, Portals, Hard racism, Expected simple stories, Little intimacy"},
      
    ];
    const itemList = document.getElementById('itemList');
  
    function renderItems(category) {
      // Clear existing items
     itemList.innerHTML = '';
  
      // Filter items based on the selected category
      const filteredItems = items.filter(item => item.category === category);
  
      // Render filtered items
      filteredItems.forEach(item => {
        const itemElement = createItemElement(item);
        itemList.appendChild(itemElement);
      });
    }
  
    function createItemElement(item) {
      const itemElement = document.createElement('div');
      itemElement.classList.add('list-item');
  
      // Create and append item content based on your existing item element structure
      if (item.language) {
        itemElement.innerHTML = `
            <div class="items-list_language">
                <a href="#" title="${item.category} - ${item.language}">
                    <div class="item-container">
                        <h3>${item.language}</h3>
                        <span class="miniSynopsis">${item.miniSynopsis}</span>
                    </div>
                </a>
                <div class="item-divider"></div>
            </div>
        `;
      } 
      return itemElement;
    }
  
  
    // Initial render (show the first category by default)
    renderItems('Language');
});

document.addEventListener('DOMContentLoaded', function () {
    let items = [

        { category: "Language", language: "Korean novels",
        miniSynopsis1: "For the past half-decade, Korean literature in translation has gone from being the exciting talking-point of the literary world to one of its dominant forces. Authors like Han Kang, Bae Suah, and Shin Kyung-sook are near enough household names in the West.",
        miniSynopsis2: ""},

        { category: "Language", language: "Japanese novels",
        miniSynopsis1: "Japanese literature is everywhere. The nation’s stories and novels get turned into manga, anime, and movies. Their authors are as famous and legendary as Hollywood’s actors and directors. And Japanese literature is big across the world. Japanese novels are often quick to be translated, and no matter how niche they may seem, they will find an audience.",
        miniSynopsis2: "We love the literature of Japan more than any other country, and Japanese authors have swum in the deep waters of every single genre."},
        
        { category: "Language", language: "Chinese novels",
        miniSynopsis1: "We all know that China is the nation on everyone’s lips this century. Whether you’re into politics, trade, economics, cinema, travel, history, fashion, whatever your passion, China is a colossal talking point. But China is also flourishing in the realm of literature in translation. Chinese novels are some of the most ground-breaking and exciting books around right now.",
        miniSynopsis2: "The politics of literature in China is fascinating. For example, Chinese science fiction novels are pushing boundaries and standing head-and-shoulders above all other sci-fi right now, and yet there’s a law in China that forbids time travel in any Chinese fiction. Time travel movies don’t even make it to Chinese cinemas. Beyond that, several of the authors on this list of Chinese novels are actually in exile, living in the UK or US."},
        
    ];
    const itemList = document.getElementById('descriptionList');
  
    function renderItems(category) {
      // Clear existing items
     itemList.innerHTML = '';
  
      // Filter items based on the selected category
      const filteredItems = items.filter(item => item.category === category);
  
      // Render filtered items
      filteredItems.forEach(item => {
        const itemElement = createItemElement(item);
        itemList.appendChild(itemElement);
      });
    }
  
    function createItemElement(item) {
      const itemElement = document.createElement('div');
      itemElement.classList.add('list-item');
  
      // Create and append item content based on your existing item element structure
      if (item.language) {
        itemElement.innerHTML = `
            <div class="items-list_language">
                <div class="${item.category} - ${item.language}">
                    <div class="novel-container">
                        <h3>${item.language}</h3>
                        <span class="miniSynopsis-1">${item.miniSynopsis1}</span>
                        <span class="miniSynopsis-2">${item.miniSynopsis2}</span>
                    </div>
                </div>
                <div class="item-divider"></div>
            </div>
        `;
      } 
      return itemElement;
    }
  
  
    // Initial render (show the first category by default)
    renderItems('Language');
});