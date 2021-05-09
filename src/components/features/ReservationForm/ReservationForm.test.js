import React from 'react';
import { shallow } from 'enzyme';
import { ReservationFormComponent } from './ReservationForm';

describe('Component ReservationForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<ReservationFormComponent />);
    expect(component).toBeTruthy();
  });
});
