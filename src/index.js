import './js/homepage';
import MenuTab from './js/menuTab';
import ContactTab from './js/contactTab';

const main = document.querySelector('main');
const tabSection = document.createElement('section');
const tabList = document.createElement('ul');
tabList.id = 'tab_list';


tabSection.appendChild(tabList);
ContactTab.addTabtoList(tabSection);
ContactTab.addTabContentToList(tabSection);

MenuTab.addTabtoList(tabSection);
MenuTab.addTabContentToList(tabSection);

main.appendChild(tabSection);
