import React from 'react';
import { shallow } from 'enzyme';
import { ProductPageComponent } from './ProductPage';

describe('Component ProductPage', () => {
  it('should render without crashing', () => {
    const product = {
      id: '3123123',
      category: 'Vitamins & Supplements',
      title: 'Joint for Dogs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      price: 135,
      image: ['/images/products/vitamins1.jpg', '/images/products/vitamins2.jpg', '/images/products/vitamins3.jpg'],
    };
    const component = shallow(<ProductPageComponent product={product}/>);
    expect(component).toBeTruthy();
  });
});
