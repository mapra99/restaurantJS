const MenuTab = (() => {
  const addTabtoList = (tabSection) => {
    const li = document.createElement('li');
    li.classList.add('tab');
    li.classList.add('active_tab');
    li.id = 'menu_tab';
    li.setAttribute('data-tab', 'menu');
    li.innerHTML = '<h2>Our Menu</h2>';

    tabSection.querySelector('#tab_list').appendChild(li);
  };

  const addTabContentToList = (tabSection) => {
    const article = document.createElement('article');
    article.classList.add('tab_content');
    article.classList.add('active_tab_content');
    article.id = 'menu_content';

    const menuFood = document.createElement('ul');
    menuFood.innerHTML = `
      <li>Byte burger</li>
      <li>Salad.js</span></li>
      <li>Hotdog</li>
      <li>Veg Pizza</li>
      <li>BBQ Pizza</li>
      <li>Mix Pasta</li>
      <li>Chinese Bhel</li>
      <li>Corn Rice</li>
      <li>Grilled Sandwich</li>
      <li>Tomato Soup</li>
    `;
    const menuDrinks = document.createElement('ul');
    menuDrinks.innerHTML = `
      <li>Reactive soda</li>
      <li>Lemon Tea</li>
      <li>Diet Coke</li>
      <li>Mojito</li>
      <li>Beer</li>
      <li>Vanilla Milk Shake</li>
      <li>Coffee</li>
    `;

    const menuImage = document.createElement('img');
    menuImage.src = './../src/img/menu-food.jpg';
    menuImage.height = 250;

    article.appendChild(menuFood);
    article.appendChild(menuDrinks);
    article.appendChild(menuImage);
    tabSection.appendChild(article);
  };

  return { addTabtoList, addTabContentToList };
})();

export default MenuTab;
