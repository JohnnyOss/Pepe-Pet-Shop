import React from 'react';
import { shallow } from 'enzyme';
import { AllProductsComponent } from './AllProducts';

describe('Component AllProducts', () => {
  it('should render without crashing', () => {
    const products = [
      {
        _id: 1,
        category: 'test',
        title: 'Puppy dry food',
        description: 'nisi ut aliquip ex ea commodo consequat',
        price: 3,
        image: ['/images/products/food1.jpg', '/images/products/food2.jpg', '/images/products/food3.jpg'],
      },
      {
        _id: 2,
        category: 'health',
        title: 'dddd',
        description: 'magna aliquco laboris',
        price: 5,
        image: ['/images/products/food4.jpg', '/images/products/food5.jpg', '/images/products/food6.jpg'],
      },
    ];
    const allProducts = function(){};
    const component = shallow(<AllProductsComponent allProducts={allProducts} products= {products}/>);
    expect(component).toBeTruthy();
  });
});
