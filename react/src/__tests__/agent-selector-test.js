import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import AgentList from '../agent-list';

let AgentSelector, getAgentsStub;

describe('AgentSelector', function() {
  beforeEach(() => {
    AgentSelector = require('../agent-selector').default;

    const agentService = require('../agent-service');
    getAgentsStub = stub(agentService, 'getAgents').returns([]);
  });

  afterEach(() => {
    getAgentsStub.restore();
  });

  it('create the app', function() {
    const sut = shallow(<AgentSelector />);

    expect(sut).not.to.be.undefined;
  });

  it('should render the default title', function() {
    const sut = shallow(<AgentSelector />);

    const header = sut.find('h1');
    expect(header.text()).to.equal('Select an agent');
  });

  it('should render list of agents', function() {
    const testAgents = ['Tess Tagent'];
    getAgentsStub.returns(testAgents);

    const sut = shallow(<AgentSelector />);

    const agentList = sut.find(AgentList);
    expect(agentList.length).to.equal(1);
    expect(agentList.prop('agents')).to.equal(testAgents);
  });

  it('when an agent is selected, the header displays them', function() {
    const testAgent = 'Tess Tagent';
    getAgentsStub.returns([testAgent]);

    const sut = shallow(<AgentSelector />);
    sut.instance().handleClick(0)

    const header = sut.find('h1');
    expect(header.text()).to.equal(`You selected agent: ${testAgent}`);
  });
});
