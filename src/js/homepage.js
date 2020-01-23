const displayHome = (() => {
  const titleSection = document.getElementById('title');
  titleSection.classList.add('side-section');
  titleSection.innerHTML = '<h1>The Restaurant for <span>Developers_</span></h1>';

  const contentSection = document.getElementById('content');
  contentSection.classList.add('side-section');
  const introArticle = document.createElement('article');
  introArticle.id = 'intro';
  introArticle.innerHTML = "<p>So, you're a Dev, uh? Well, here you can find the meals that best suit your time and physiological needs</p>";
  contentSection.appendChild(introArticle);

  const menuArticle = document.createElement('article');
  menuArticle.id = 'menu';
  menuArticle.innerHTML = `
<p>We offfer: </p>
<ul>
  <li><span>Byte</span>burger</li>
  <li>Salad.<span>js</span></li>
  <li><span>Reactive</span> soda</li>
  <li>Hotdog</li>
</ul>`;
  contentSection.appendChild(menuArticle);

  const moreArticle = document.createElement('article');
  moreArticle.id = 'more-services';
  moreArticle.innerHTML = '<p>And yup, We also got music, WiFi and a coworking space, just what we need!</p>';
  contentSection.appendChild(moreArticle);
})();
export default displayHome;
