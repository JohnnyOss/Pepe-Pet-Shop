import React from 'react';
import { shallow } from 'enzyme';
import { ProductsCategoryComponent } from './ProductsCategory';

describe('Component ProductsCategory', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsCategoryComponent />);
    expect(component).toBeTruthy();
  });
});
