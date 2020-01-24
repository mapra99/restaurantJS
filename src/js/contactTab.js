const ContactTab = (() => {
  const addTabtoList = (tabSection) => {
    const li = document.createElement('li');
    li.classList.add('tab');
    li.id = 'contact_tab';
    li.setAttribute('data-tab', 'contact');
    li.innerHTML = '<h2>Contact</h2>';

    tabSection.querySelector('#tab_list').appendChild(li);
  };

  const addTabContentToList = (tabSection) => {
    const article = document.createElement('article');
    article.classList.add('tab_content');
    article.id = 'contact_content';
    const divMap = document.createElement('div');
    divMap.id = 'contact_map';
    divMap.innerHTML = `
    <h3>Find us here!</h3>
    <iframe width="500" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-74.03711199760438%2C4.730624707320182%2C-74.03115749359132%2C4.733891193512506&amp;layer=mapnik"></iframe>
    `;

    const divSocial = document.createElement('div');
    divSocial.id = 'contact_social';
    divSocial.innerHTML = `
    <h3>Or Contact us on</h3>
    <ul>
    <li><a href='mailto:mapra99@gmail.com'>Email</a></li>
    <li><a href='https://github.com/mapra99/'>GitHub</a></li>
    <li><a href='https://twitter.com/MiguelPrada1'>Twiter</a></li>
    <li><a href='https://www.linkedin.com/in/mprada/'>LinkedIn</a></li>
    </ul>
    `;

    article.appendChild(divMap);
    article.appendChild(divSocial);

    tabSection.appendChild(article);
  };

  return { addTabtoList, addTabContentToList };
})();

export default ContactTab;
