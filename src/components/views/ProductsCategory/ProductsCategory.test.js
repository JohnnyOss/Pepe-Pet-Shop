import React from 'react';
import { shallow } from 'enzyme';
import { ProductsCategoryComponent } from './ProductsCategory';

describe('Component ProductsCategory', () => {
  it('should render without crashing', () => {
    const products = [
      {
        id: 1,
        category: 'test',
        title: 'Puppy dry food',
        description: 'nisi ut aliquip ex ea commodo consequat',
        price: 3,
        image: ['/images/products/food1.jpg', '/images/products/food2.jpg', '/images/products/food3.jpg'],
      },
      {
        id: 2,
        category: 'health',
        title: 'dddd',
        description: 'magna aliquco laboris',
        price: 5,
        image: ['/images/products/food4.jpg', '/images/products/food5.jpg', '/images/products/food6.jpg'],
      },
    ];
    const component = shallow(<ProductsCategoryComponent products= {products} match={{params: {id: 1}, isExact: true, path: '', url: ''}} />);
    expect(component).toBeTruthy();
  });
});
