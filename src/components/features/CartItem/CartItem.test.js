import React from 'react';
import { shallow } from 'enzyme';
import { CartItemComponent } from './CartItem';

describe('Component CartItem', () => {
  it('should render without crashing', () => {
    const cart = {
      id: 1,
      image: ['/images/products/food1.jpg', '/images/products/food2.jpg', '/images/products/food3.jpg'],
    };
    const component = shallow(<CartItemComponent image={cart.image}/>);
    expect(component).toBeTruthy();
  });
});
