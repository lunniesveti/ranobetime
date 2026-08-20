document.addEventListener('DOMContentLoaded', function () {
    let items = [
      { category: "Genres", genre: "Action",
      miniSynopsis: "A work typically depicting fighting, violence, chaos, and fast-paced motion."},
      { category: "Genres", genre: "Adult",
      miniSynopsis: "Contains mature content that is suitable only for adults. Titles in this category may include prolonged scenes of intense violence and/or graphic sexual content and nudity."},
      { category: "Genres", genre: "Adventure",
      miniSynopsis: "Exploring new places, environments or situations. This is often associated with people on long journeys to places far away encountering amazing things."},
      { category: "Genres", genre: "Comedy",
      miniSynopsis: "A dramatic work that is light and often humorous or satirical in tone and that usually contains a happy resolution of the thematic conflict."},
      { category: "Genres", genre: "Drama",
      miniSynopsis: "A work meant to bring on an emotional response, such as instilling sadness or tension. Novels that often show life or characters through conflict and emotions. In general, the different parts of the story tend to form a whole that is greater than the sum of the parts.In other words, the story has a message that is bigger than just the story line itself."},
      { category: "Genres", genre: "Ecchi",
      miniSynopsis: "Possibly the line between hentai and non-hentai, ecchi usually refers to fanservice put in to attract a certain group of fans."},
      { category: "Genres", genre: "Fantasy",
      miniSynopsis: "Anything that involves, but not limited to, magic, dream world, and fairy tales."},
      { category: "Genres", genre: "Game",
      miniSynopsis: "Novels related to game elements, or a similar system. For example: characters are immersed in VR, God closed people in space with the system, technologies like a game (RealRPG) descended into the world."},
      { category: "Genres", genre: "Gender Bender",
      miniSynopsis: "Girls dressing up as guys, guys dressing up as girls. Guys turning into girls, girls turning into guys."},
      { category: "Genres", genre: "Harem",
      miniSynopsis: "A series involving one male character and many female characters (usually attracted to the male character). A Reverse Harem is when the genders are reversed."},
      { category: "Genres", genre: "Josei",
      miniSynopsis: "Literally [Woman]. Targets women 18-30. Female equivalent to seinen. Unlike shoujo the romance is more realistic and less idealized. The storytelling is more explicit and mature."},
      { category: "Genres", genre: "Historical",
      miniSynopsis: "Novels whose setting is in the past. Frequently these follow historical tales, sagas or facts. World with kingdom setting that are not from actual history saga, tales, are not included."},
      { category: "Genres", genre: "Horror",
      miniSynopsis: "Novels whose focus is to scare the audience."},
      { category: "Genres", genre: "Martial Arts",
      miniSynopsis: "The novel has a focus on any of several arts of combat or self-defense. These may include aikido, karate, judo, or tae kwon do, kendo, fencing, and so on and so forth."},
      { category: "Genres", genre: "Mature",
      miniSynopsis: "Contains subject matter which may be too extreme for a younger audience. Content that deals with mature themes such as gore, sex, or violence."},
      { category: "Genres", genre: "Mecha",
      miniSynopsis: "A work involving and usually concentrating on all types of large robotic machines."},
      { category: "Genres", genre: "Mystery",
      miniSynopsis: "Usually an unexplained event occurs, and the main protagonist attempts to find out what caused it."},
      { category: "Genres", genre: "Psychological",
      miniSynopsis: "Usually deals with the philosophy of a state of mind, in most cases detailing abnormal psychology."},
      { category: "Genres", genre: "Romance",
      miniSynopsis: "A story in this genre focus heavily on the romantic relationship between two or more people."},
      { category: "Genres", genre: "School Life",
      miniSynopsis: "Having a major setting of the story deal with some type of school."},
      { category: "Genres", genre: "Sci-fi",
      miniSynopsis: "Short for science fiction, these works involve twists on technology and other science related phenomena which are contrary or stretches of the modern day scientific world."},
      { category: "Genres", genre: "Seinen",
      miniSynopsis: "Seinen means 'Young Man.' Novels that specifically targets young adult males around the ages of 18 to 25 are Seinen titles. Typically the story lines deal with the issues of adulthood."},
      { category: "Genres", genre: "Shoujo",
      miniSynopsis: "A work intended and primarily written for females. Usually the story is from the point of view of a young female protagonist and usually involves romance and drama."},
      { category: "Genres", genre: "Shounen",
      miniSynopsis: "A work intended and primarily written for younger male audience. These works usually involve, but not limited to, fighting and/or violence."},
      { category: "Genres", genre: "Slice of Life",
      miniSynopsis: "Novels with no focused plot. This genre tends to be naturalistic and mainly focuses around the main characters and their everyday lives. Often there will be some philosophical perspectives regarding love, relationships, life etc. tied into the novel. The overall typical moods for this type of story are cheery and carefree, no-rush life for the characters."},
      { category: "Genres", genre: "Shounen Ai",
      miniSynopsis: "Often synonymous with Yaoi, this can be thought of as somewhat less extreme and only hints at a relationship between two males. [Boy's Love], so to speak."},
      { category: "Genres", genre: "Sports",
      miniSynopsis: "As the name suggests, story with sports as one of its main element. Baseball, basketball, hockey, soccer, golf, and racing just to name a few."},
      { category: "Genres", genre: "Supernatural",
      miniSynopsis: "Usually entails amazing and unexplained powers or events which defy the laws of physics."},
      { category: "Genres", genre: "Smut",
      miniSynopsis: "Erotic work of fiction that's mainly targeted toward females. Smut stories often gives heavy focus on love and relationships between the main characters."},
      { category: "Genres", genre: "Tragedy",
      miniSynopsis: "Contains events resulting in great loss and misfortune."},
      { category: "Genres", genre: "Xianxia",
      miniSynopsis: "Xianxia is fictional martial art stories where the main goal of the population is cultivating to Immortality, seeking eternal life and the pinnacle of strength. Xianxia stories features supernatural elements, influenced heavily by Chinese folklore / mythology. Cultivation path in xianxia involves taoism/daoism elements. If the story doesn't mention the dao, odds are that it is not a Xianxia."},
      { category: "Genres", genre: "Xuanhuan",
      miniSynopsis: "Similar to xianxia, Xuanhuan may contain immortal cultivation. However, unlike xianxia, which is more focused on becoming immortal and tighter on chinese mythology, Xuanhuan is a broader, more loose genre. Basically, if it's a cultivation-based story, yet it contain elements of western fantasy, such as sci-fi, or magic that's not inherently eastern, then it is a xuanhuan."},
      { category: "Genres", genre: "Wuxia",
      miniSynopsis: "Wuxia is a fictional stories about mortal humans who can achieve superhuman ability through martial arts training or internal energy cultivation. Wuxia is usually depicted in an ancient china setting. Despite any existence of supernatural elements, characters in a wuxia are rarely depicted reaching over 150 years of age. No immortality."},
      { category: "Genres", genre: "Yaoi",
      miniSynopsis: "This work usually involves intimate relationships between men. Mutually exclusive with shounen ai."},
      { category: "Genres", genre: "Yuri",
      miniSynopsis: "This work usually involves intimate relationships between women. Mutually exclusive with shoujo ai."},
      
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
      if (item.genre) {
        itemElement.innerHTML = `
            <div class="items-list_genre">
                <a href="#" title="${item.category} - ${item.genre}">
                    <div class="item-container">
                        <h3>${item.genre}</h3>
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
    renderItems('Genres');
});

