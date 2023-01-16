const assert = require('assert');

Feature('Like Restaurant');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Showing empty like restaurant', (I) => {
  I.amOnPage('/#/favorite');
  I.see('There are no favorite restaurants yet', '#emptyData');
});

Scenario('Like a restaurant', async (I) => {
  I.amOnPage('/');

  I.seeElement('#mainContent');
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item a');

  const firstRestaurant = locate('restaurant-item a').first();
  const firstRestaurantName = await I.grabTextFrom(locate('restaurant-item .title').first());

  I.click(firstRestaurant);

  I.seeElement('#saveButton');
  I.click('#saveButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item');

  const savedRestaurantName = await I.grabTextFrom('restaurant-item .title');

  assert.strictEqual(firstRestaurantName, savedRestaurantName);
});

Scenario('Unlike a restaurant', async (I) => {
  I.amOnPage('/');

  I.seeElement('#mainContent');
  I.seeElement('restaurant-list');
  I.seeElement('restaurant-item a');

  const firstRestaurant = locate('restaurant-item a').first();
  const firstRestaurantName = await I.grabTextFrom(locate('restaurant-item .title').first());

  I.click(firstRestaurant);

  I.seeElement('#saveButton');
  I.click('#saveButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  const savedRestaurantName = await I.grabTextFrom('restaurant-item .title');
  assert.strictEqual(firstRestaurantName, savedRestaurantName);

  const savedRestaurant = locate('restaurant-item a').first();
  const firstSavedRestaurantName = await I.grabTextFrom(locate('restaurant-item .title').first());

  I.click(savedRestaurant);

  I.seeElement('#deleteButton');
  I.click('#deleteButton');

  const removedRestaurantName = await I.grabTextFrom('restaurant-detail h1');
  assert.strictEqual(firstSavedRestaurantName, removedRestaurantName);

  I.amOnPage('/#/favorite');
  I.see('There are no favorite restaurants yet', '#emptyData');
});
