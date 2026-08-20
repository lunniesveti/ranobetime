document.addEventListener('DOMContentLoaded', function () {
    let items = [
      { category: "Authors", name: "Moxiang Tongxiu", image:"../images/tian_guan_ci_fu.jpg",
      aboutAuthor:"Moxiang Tongxiu (Chinese: 墨香铜臭, pinyin Mòxiāng Tóngxiù) is a Chinese writer of fantasy novels in the danmei genre. Began publishing on the Chinese online literary platform «Jinjiang»."},
      { category: "Authors", name: "Sing-Shong", image:"../images/omniscient_readers_viewpoint.jpg",
      aboutAuthor:"Sing Shong (also translated as Sing-Syong, or sing N song on the official Webtoon page) is the pseudonym used by the married couple who co-authored 'Omniscient Reader's Viewpoint' as well as The World After The Fall."},
      { category: "Authors", name: "Jang Sung-lak", image:"../images/solo_leveling.jpg",
      aboutAuthor:"Jang “Dubu” Sung-rak, the artist of the popular Korean webtoon Solo Leveling and CEO of Redice Studio, has died. Redice Studio announced the news today on its official Twitter account, stating that Dubu passed on July 23. The illustrator’s cause of death was a cerebral hemorrhage while suffering from a chronic illness."},
      { category: "Authors", name: "Yoo Ryeo Han", image:"../images/trash_of_counts_family.jpg",
      aboutAuthor:"No information about this author..."},
      { category: "Authors", name: "God Dandelion", image:"../images/Autumn_leaves.jpg",
      aboutAuthor:"No information about this author..."}
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
      if (item.name) {
        itemElement.innerHTML = `
        <div class="person-card">
            <a href="#">
                <div class="cover-image">
                    <img src="${item.image}" alt="profile">
                </div>
            </a>
            <div class="author-profile">
                <div class="author-name">
                    <a href="#">
                    <h3>${item.name}</h3>
                    </a>
                </div>
                <div class="about-author">
                    <span class="information-about-author">${item.aboutAuthor}</span>
                </div>
            </div>
      </div>
        `;
      } 
      return itemElement;
    }
  
  
    // Initial render (show the first category by default)
    renderItems('Authors');
  });