import * as TestFactories from './helper/testFactories';
import LocalData from '../src/scripts/data/local-data';

describe('Saving a restaurant', () => {
  const restaurantSample = {
    id: 'rqdv5juczeskfw1e867',
    name: 'Melting Pot',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...',
    pictureId: '14',
    city: 'Medan',
    rating: 4.2,
  };

  beforeEach(() => {
    document.body.innerHTML = '<div id="saveButtonContainer"></div>';
  });

  it('Should show the save button when the restaurant has not been saved before', async () => {
    await TestFactories.createSavedButton(restaurantSample);
    expect(document.querySelector('[aria-label="Save to Favorite"]')).toBeTruthy();
  });

  it('Should not show the delete button when the restaurant has not been saved before', async () => {
    await TestFactories.createSavedButton(restaurantSample);
    expect(document.querySelector('[aria-label="Delete from Favorite"]')).toBeFalsy();
  });

  it('Should be able to save the restaurant', async () => {
    await TestFactories.createSavedButton(restaurantSample);

    document.querySelector('#saveButton').dispatchEvent(new Event('click'));
    const restaurant = await LocalData.getRestaurantById(restaurantSample.id);

    expect(restaurant).toEqual(restaurantSample);

    await LocalData.deleteRestaurant(restaurantSample.id);
  });

  it('Should not save a restaurant again when its already saved', async () => {
    await TestFactories.createSavedButton(restaurantSample);

    await LocalData.saveRestaurant(restaurantSample);

    document.querySelector('#saveButton').dispatchEvent(new Event('click'));
    expect(await LocalData.getAllSaved()).toEqual([restaurantSample]);

    await LocalData.deleteRestaurant(restaurantSample.id);
  });

  it('Should not save a restaurant when it has no id', async () => {
    await TestFactories.createSavedButton({});

    document.querySelector('#saveButton').dispatchEvent(new Event('click'));

    expect(await LocalData.getAllSaved()).toEqual([]);
  });
});
