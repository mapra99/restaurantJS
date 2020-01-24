const MenuTab = (() => {
  const addTabtoList = (tabSection) => {
    const li = document.createElement('li');
    li.classList.add('tab');
    li.id = 'menu_tab';
    li.innerText = 'Our Menu';
    tabSection.querySelector('#tab_list').appendChild(li);
  };

  const addTabContentToList = (tabSection) => {
    const article = document.createElement('article');
    article.classList.add('tab_content');
    article.id = 'menu_content';
    article.setAttribute('data-tab', 'menu');
    article.innerHTML = `
    <p>We offfer: </p>
    <ul>
      <li><span>Byte</span>burger</li>
      <li>Salad.<span>js</span></li>
      <li><span>Reactive</span> soda</li>
      <li>Hotdog</li>
    </ul>`;

    tabSection.appendChild(article);
  };

  return { addTabtoList, addTabContentToList };
})();

export default MenuTab;