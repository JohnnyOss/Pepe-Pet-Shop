import React from 'react';
import { shallow } from 'enzyme';
import { InfoBoxComponent } from './InfoBox';

describe('Component InfoBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<InfoBoxComponent />);
    expect(component).toBeTruthy();
  });
});
