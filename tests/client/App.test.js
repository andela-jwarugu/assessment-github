import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import App from '../../client/components/App.jsx';
import React from 'react';

describe('<App />', () => {
  it('has initial state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().members).to.eql([]);
  })

  it('calls componentDidMount once', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.be.true;
  })

  it('displays a list', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ul')).to.have.length(1);
  })
})

// Expect component to have initial state
// mount component and expect it to call componentDidMount once
// Shallow render omponent and test for existing elements e.g. a list/button
// Mount component and inject data
// Expect Component state and elements props to change accordingly
// Mount Compnent and expect button click to call the right activity
