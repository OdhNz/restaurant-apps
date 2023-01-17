import ApiRepository from '../../data/api-repository';
import '../../component/loading-indicator';
import '../../component/restaurant-list';

class Home {
  static async render() {
    return `
          <section class="jumbotron">
          <picture>
            <source media="(min-width:601px)" srcset="./images/heros/hero-image_4-large.jpg">
            <source media="(max-width:600px)" srcset="./images/heros/hero-image_4-small.jpg">
            <img src="./images/heros/hero-image_4-large.jpg" alt="Heroes Image">
          </picture>
              <h1 class="jumbotron-title">Restaurant<br>"Best in the city"</h1>
          </section>
          
          <article id="mainContent">
            <h2 tabindex="0" class="main-content__title">Great Place to enjoy</h2>
            <loading-indicator></loading-indicator>
            <restaurant-list class="wrapper"></restaurant-list>
          </article>`;
  }

  static async afterRender() {
    // const jumbotronElement = document.querySelector('.jumbotron');
    const mainContent = document.querySelector('#content');
    const loadingElement = document.querySelector('loading-indicator');
    const restaurantListElement = document.querySelector('restaurant-list');

    // jumbotronElement.style.backgroundImage = "url('./images/heros/hero-image_4.jpg')";

    try {
      const response = await ApiRepository.getRestaurantList();
      restaurantListElement.restaurants = response;
    } catch (message) {
      mainContent.innerHTML = '<h3>Failed to load data!</h3>';
    } finally {
      loadingElement.style.display = 'none';
    }
  }
}

export default Home;
