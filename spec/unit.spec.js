import React from 'react';
import {shallow} from 'enzyme';
import {expect, before} from 'chai';
import sampleData from './sampleData';
import App from '../client/src/components/App';
import ProductDisplay from '../client/src/components/ProductDisplay';
import Quantity from '../client/src/components/Quantity';
import Tagline from '../client/src/components/Tagline';

describe('App Component', () => {
  test('Should Contain essential elements', () => {
    let wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.find('ProductDisplay')).to.have.lengthOf(1);
  })
});

describe('ProductDisplay Component', () => {
  test('Should wrap all elements', () => {
    let wrapper = shallow(<ProductDisplay />, {disableLifecycleMethods: true});
    expect(wrapper.find('Tagline')).to.have.lengthOf(1);
    expect(wrapper.find('Ratings')).to.have.lengthOf(1);
    expect(wrapper.find('Desc')).to.have.lengthOf(1);
    expect(wrapper.find('Options')).to.have.lengthOf(1);
    expect(wrapper.find('Quantity')).to.have.lengthOf(1);
    expect(wrapper.find('ButtonGroup')).to.have.lengthOf(1);
    expect(wrapper.find('AdditionalInformation')).to.have.lengthOf(1);
  })
});

describe('ProductDisplay Component', () => {
  test('Should contain essential elements', () => {
    let wrapper = shallow(<Tagline product={sampleData[0]}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('h2')).to.have.lengthOf(1);
    expect(wrapper.find('p')).to.have.lengthOf(1);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });
  test('Should render product name properly', () => {
    let wrapper = shallow(<Tagline product={sampleData[0]}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('h2').text()).to.be.an('string')
    expect(wrapper.find('h2').text()).to.be.equal('SMALL SOFT CHIPS');
  });
  test('Should render product short desc properly', () => {
    let wrapper = shallow(<Tagline product={sampleData[0]}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('p').text()).to.be.an('string')
    expect(wrapper.find('p').text()).to.be.equal('gold Shoes Global');
  });
  test('Should render product price properly', () => {
    let wrapper = shallow(<Tagline product={sampleData[0]}/>, {disableLifecycleMethods: true});
    expect(wrapper.find('h1').text()).to.be.an('string')
    expect(wrapper.find('h1').text()).to.be.equal('$338.59');
  });
});

describe('Quantity Component', () => {
  test('Component Should Exist', () => {
    shallow(<Quantity />);
  });
  test('Should contain essential elements', () => {
    let wrapper = shallow(<Quantity />);
    expect(wrapper.find('#add')).to.have.lengthOf(1);
    expect(wrapper.find('#sub')).to.have.lengthOf(1);
    expect(wrapper.find('#counter')).to.have.lengthOf(1);
  });
  test('Should begin at "1"', () => {
    let wrapper = shallow(<Quantity />);
    expect(wrapper.find('#counter').text()).to.be.an("string");
    expect(wrapper.find('#counter').text()).to.be.equal("1");
  });
  test('Should Decrement Properly', () => {
    let wrapper = shallow(<Quantity />);
    wrapper.find('#sub').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('1');
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('2');
    wrapper.find('#sub').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('1');
  });
  test('Should increment quantity by "1"', () => {
    let wrapper = shallow(<Quantity />);
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('2');
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('3');
  });
});