import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesBoxComponent } from './CategoriesBox';

describe('Component CategoriesBox', () => {
  it('should render without crashing', () => {
    const categories = [
      {
        _id: 1,
        name: 'test',
        image: '/images/categories/food.jpg',
      },
      {
        _id: 2,
        name: 'bbb',
        image: '/images/categories/toy.jpg',
      },
    ];
    const fetchCategories = function(){};
    const component = shallow(<CategoriesBoxComponent fetchCategories={fetchCategories} categories={categories}/>);
    expect(component).toBeTruthy();
  });
});
