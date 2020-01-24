import switchActiveTab from './tabGeneral';

const ContactTab = (() => {
  const addTabtoList = (tabSection) => {
    const li = document.createElement('li');
    li.classList.add('tab');
    li.id = 'contact_tab';
    li.setAttribute('data-tab', 'contact');
    li.innerHTML = '<h2>Contact</h2>';

    li.addEventListener('click', switchActiveTab);

    tabSection.querySelector('#tab_list').appendChild(li);
  };

  const addTabContentToList = (tabSection) => {
    const article = document.createElement('article');
    article.classList.add('tab_content');
    article.id = 'contact_content';
    article.innerHTML = `
    <h3>Find us here!</h3>
    <iframe width="500" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-74.03711199760438%2C4.730624707320182%2C-74.03115749359132%2C4.733891193512506&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/4.73226/-74.03413">View Larger Map</a></small>
    <h3>Or Contact us on</h3>
    <a href='mailto:mapra99@gmail.com'>Email</a>
    <a href='https://github.com/mapra99/'>GitHub</a>
    <a href='https://twitter.com/MiguelPrada1'>Twiter</a>
    <a href='https://www.linkedin.com/in/mprada/'>LinkedIn</a>
    `;
    tabSection.appendChild(article);
  };

  return { addTabtoList, addTabContentToList };
})();

export default ContactTab;
