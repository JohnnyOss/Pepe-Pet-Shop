import React from 'react';
import { shallow } from 'enzyme';
import { FormPageComponent } from './FormPage';

describe('Component FormPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<FormPageComponent />);
    expect(component).toBeTruthy();
  });
});
