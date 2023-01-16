import CONFIG from '../data/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantItem extends HTMLElement {
  set restaurantItem(restaurant) {
    this.restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="img-container">
      <img tabindex="0" class="lazyload card-image" alt="${this.restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL}${this.restaurant.pictureId}"/>
      <span tabindex="0" class="card-rating">
        <i title="ratings" class="fa fa-star"></i>
        <span>${this.restaurant.rating}</span>
      </span>
    </div>
  <div tabindex="0" class="card-content">
    <p class="card-content-title">${this.restaurant.name} - ${this.restaurant.city}</p>
    <p class="truncate">${this.restaurant.description}</p>
    <a href="#/detail/${this.restaurant.id}" aria-label="See details of ${this.restaurant.name}">See Details</a>
  </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
