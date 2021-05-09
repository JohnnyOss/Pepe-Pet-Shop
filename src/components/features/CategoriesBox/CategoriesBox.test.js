import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesBoxComponent } from './CategoriesBox';

describe('Component CategoriesBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<CategoriesBoxComponent />);
    expect(component).toBeTruthy();
  });
});
