import ImageBackground from '../img/bg-primary.jpg';

const displayHome = (() => {
  const contentSection = document.getElementById('content');
  contentSection.style.background = `url(${ImageBackground}) center/cover no-repeat fixed`;

  const introSection = document.createElement('section');
  introSection.id = 'intro';

  const titleSection = document.createElement('article');
  titleSection.id = 'title';

  titleSection.classList.add('side-section');
  titleSection.innerHTML = '<h1>The Restaurant for <span>Developers_</span></h1>';
  introSection.appendChild(titleSection);

  const profileSection = document.createElement('article');
  profileSection.id = 'profile';
  profileSection.classList.add('side-section');
  const introDiv = document.createElement('div');
  introDiv.id = 'intro-text';
  introDiv.innerHTML = "<p>So, you're a Dev, uh? Well, here you can find the meals that best suit your time and physiological needs</p>";
  profileSection.appendChild(introDiv);

  const menuDiv = document.createElement('div');
  menuDiv.id = 'menu';
  menuDiv.innerHTML = `
  <p>We offfer: </p>
  <ul>
    <li><span>Byte</span>burger</li>
    <li>Salad.<span>js</span></li>
    <li><span>Reactive</span> soda</li>
    <li>Hotdog</li>
  </ul>`;
  profileSection.appendChild(menuDiv);

  const moreDiv = document.createElement('div');
  moreDiv.id = 'more-services';
  moreDiv.innerHTML = '<p>And yup, We also got music, WiFi and a coworking space, just what we need!</p>';
  profileSection.appendChild(moreDiv);

  introSection.appendChild(profileSection);
  contentSection.appendChild(introSection);
})();
export default displayHome;
