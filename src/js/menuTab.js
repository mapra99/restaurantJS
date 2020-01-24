import switchActiveTab from './tabGeneral';

const MenuTab = (() => {
  const addTabtoList = (tabSection) => {
    const li = document.createElement('li');
    li.classList.add('tab');
    li.classList.add('active_tab');
    li.id = 'menu_tab';
    li.setAttribute('data-tab', 'menu');
    li.innerHTML = '<h2>Our Menu</h2>';

    li.addEventListener('click', switchActiveTab);

    tabSection.querySelector('#tab_list').appendChild(li);
  };

  const addTabContentToList = (tabSection) => {
    const article = document.createElement('article');
    article.classList.add('tab_content');
    article.classList.add('active_tab_content');
    article.id = 'menu_content';
    article.innerHTML = `
    <p>We offfer: </p>
    <ul>
      <li>Byte burger</li>
      <li>Salad.js</span></li>
      <li>Reactive soda</li>
      <li>Hotdog</li>
    </ul>`;
    tabSection.appendChild(article);
  };

  return { addTabtoList, addTabContentToList };
})();

export default MenuTab;