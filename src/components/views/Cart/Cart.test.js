import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const cart = [
      {
        id: '3123123',
        category: 'Vitamins & Supplements',
        title: 'Joint for Dogs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        price: 135,
        image: ['/images/products/vitamins1.jpg', '/images/products/vitamins2.jpg', '/images/products/vitamins3.jpg'],
      },
      {
        id: '32131113',
        category: 'Vitamins & Supplements',
        title: 'Joint for Dogs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        price: 135,
        image: ['/images/products/vitamins1.jpg', '/images/products/vitamins2.jpg', '/images/products/vitamins3.jpg'],
      },
    ];
    const component = shallow(<CartComponent cart={cart}/>);
    expect(component).toBeTruthy();
  });
});
