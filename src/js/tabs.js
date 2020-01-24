import MenuTab from './menuTab';
import ContactTab from './contactTab';


const CreateTabs = (() => {
  const switchActiveTab = (e) => {
    // Select actual tab and remove active class
    const activeTab = document.querySelector('.active_tab');
    activeTab.classList.remove('active_tab');
    const activeTabData = activeTab.dataset.tab;
    const activeTabContent = document.getElementById(`${activeTabData}_content`);
    activeTabContent.classList.remove('active_tab_content');

    // Select target tab and add active class
    const targetTab = e.target.parentElement;
    const targetTabData = targetTab.dataset.tab;
    const targetTabContent = document.getElementById(`${targetTabData}_content`);
    targetTab.classList.add('active_tab');
    targetTabContent.classList.add('active_tab_content');
  };

  const main = document.querySelector('main');
  const tabSection = document.createElement('section');
  tabSection.id = 'details';
  const tabList = document.createElement('ul');
  tabList.id = 'tab_list';
  tabSection.appendChild(tabList);

  MenuTab.addTabtoList(tabSection);
  MenuTab.addTabContentToList(tabSection);

  ContactTab.addTabtoList(tabSection);
  ContactTab.addTabContentToList(tabSection);

  tabList.childNodes.forEach((tab) => { tab.addEventListener('click', switchActiveTab); });
  main.appendChild(tabSection);
})();

export default CreateTabs;
