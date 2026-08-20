//CATALOGUE ADDER
document.addEventListener('DOMContentLoaded', function () {
    const catalogData = [
      { name: "Heaven Official's Blessing (Novel)", image: "url('images/tian_guan_ci_fu.jpg')", subtitle: "China", year:"2019" },
      { name: "The Grandmaster of Demonic Cultivation (Novel)", image: "url('../images/modaozushi.jpg')", subtitle: "China", year:"2020" },
      { name: "Remnants of Filth (Novel)", image: "url('../images/remnants_of_filth.jpg')", subtitle: "China", year:"2019" },
      { name: "Omniscient Reader’s Viewpoint (Novel)", image: "url('../images/omniscient_readers_viewpoint.jpg')", subtitle: "Korea", year:"2020" },
      { name: "Scum Villain's Self-Saving System (Novel)", image: "url('../images/Scum_Villains_Self-Saving_System.jpg')", subtitle: "China", year:"2018" },
      { name: "Quick Transmigration: The villain's Bai Yueguang is dead again (Novel)", image: "url('../images/quick_transmigration.jpg')", subtitle: "China", year:"2019" },
      { name: "Solo Leveling (I alone level up) (Novel)", image: "url('../images/solo_leveling.jpg')", subtitle:"Korea", year:"2020"},
      { name: "Trash of the Count's Family (Novel)", image: "url('../images/trash_of_counts_family.jpg')", subtitle: "Korea", year:"2021" },
      { name: "The Beginning After the End (Novel)", image: "url('../images/beginning.jpg')", subtitle: "English", year:"2020" },
      { name: "Death Is The Only Ending For The Villain (Novel)", image: "url('images/only_ending_for_villain.jpg')", subtitle: "Korea", year:"2018" },
      { name: "Remnants of Filth (Novel)", image: "url('../images/remnants_of_filth.jpg')", subtitle: "China", year:"2019" },
      { name: "Remnants of Filth (Novel)", image: "url('../images/remnants_of_filth.jpg')", subtitle: "China", year:"2019" },
      { name: "Remnants of Filth (Novel)", image: "url('../images/remnants_of_filth.jpg')", subtitle: "China", year:"2019" },
      { name: "Remnants of Filth (Novel)", image: "url('../images/remnants_of_filth.jpg')", subtitle: "China", year:"2019" },
      { name: "Remnants of Filth (Novel)", image: "url('../images/remnants_of_filth.jpg')", subtitle: "China", year:"2019" },
      { name: "Remnants of Filth (Novel)", image: "url('../images/remnants_of_filth.jpg')", subtitle: "China", year:"2019" },
      { name: "Remnants of Filth (Novel)", image: "url('../images/remnants_of_filth.jpg')", subtitle: "China", year:"2019" },
    ];

    const catalogContainer = document.getElementById('catalog');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');

    function renderGridView() {
      catalogContainer.innerHTML = '';
      catalogContainer.classList.remove('media-cards-list');
      catalogData.forEach(item => {
        const gridItem = createGridItemElement(item);
        catalogContainer.appendChild(gridItem);
      });
    }

    function renderListView() {
      catalogContainer.innerHTML = '';
      catalogContainer.classList.add('media-cards-list');
      catalogData.forEach(item => {
        const listItem = createListItemElement(item);
        catalogContainer.appendChild(listItem);
      });
    }

    
  function createGridItemElement(item) {
      const itemElement = document.createElement('div');
      itemElement.classList.add('media-card-wrap');

      const cardLink = document.createElement('a');
      cardLink.classList.add('media-card');
      cardLink.href = '#';
      cardLink.style.backgroundImage = item.image;

      const caption = document.createElement('div');
      caption.classList.add('media-card_caption');

      const subtitle = document.createElement('h5');
      subtitle.classList.add('media-card_subtitle');
      subtitle.textContent = item.subtitle;

      const title = document.createElement('h3');
      title.classList.add('media-card_title', 'line-clamp');
      title.textContent = item.name;

      caption.appendChild(subtitle);
      caption.appendChild(title);
      cardLink.appendChild(caption);
      itemElement.appendChild(cardLink);

      return itemElement;
  }

  function createListItemElement(item) {
      const itemElement = document.createElement('div');
      itemElement.classList.add('media-card-wrap');

      const cardLink = document.createElement('a');
      cardLink.classList.add('media-card');
      cardLink.href = '#';
      cardLink.style.backgroundImage = item.image;

      const captionDiv = document.createElement('div');
      captionDiv.classList.add('media-card_caption');

      const novelLink = document.createElement('a');
      novelLink.classList.add('novel');
      novelLink.href = '#';

      const title = document.createElement('h3');
      title.classList.add('media-card_title');
      title.textContent = item.name;

      const subtitles = document.createElement('div');
      subtitles.classList.add('subtitles');

      const countrySubtitle = document.createElement('h5');
      countrySubtitle.classList.add('media-card_subtitle', 'country');
      countrySubtitle.textContent = item.subtitle;

      const yearSubtitle = document.createElement('h5');
      yearSubtitle.classList.add('media-card_subtitle', 'year');
      yearSubtitle.textContent = item.year;

      
      subtitles.appendChild(countrySubtitle);
      subtitles.appendChild(yearSubtitle);

      novelLink.appendChild(title);
      novelLink.appendChild(subtitles);

      captionDiv.appendChild(novelLink);
      itemElement.appendChild(cardLink);
      itemElement.appendChild(captionDiv);

      return itemElement;
  }

  gridViewBtn.addEventListener('click', renderGridView);
  listViewBtn.addEventListener('click', renderListView);

  // Initial render (grid view)
    renderGridView();
});
//CATALOGUE ADDER