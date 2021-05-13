import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesBoxComponent } from './CategoriesBox';

describe('Component CategoriesBox', () => {
  it('should render without crashing', () => {
    const categories = [
      {
        id: 1,
        name: 'test',
        title: 'Test',
        priceMin: 3,
        image: '/images/categories/food.jpg',
      },
      {
        id: 2,
        name: 'bbb',
        title: 'Bbb',
        priceMin: 5,
        image: '/images/categories/toy.jpg',
      },
    ];
    const component = shallow(<CategoriesBoxComponent categories={categories}/>);
    expect(component).toBeTruthy();
  });
});
