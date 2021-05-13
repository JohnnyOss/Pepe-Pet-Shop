import React from 'react';
import { shallow } from 'enzyme';
import { ProductBoxComponent } from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const link = 'test';
    const component = shallow(<ProductBoxComponent link={link}/>);
    expect(component).toBeTruthy();
  });
});
