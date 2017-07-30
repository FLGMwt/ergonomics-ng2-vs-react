import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

const l = console.log;
let AgentSelector, getAgentsStub;

describe('AgentSelector', function() {
  beforeEach(() => {
    AgentSelector = require('../agent-selector').default;

    const agentService = require('../agent-service');
    getAgentsStub = stub(agentService, 'getAgents').returns([]);
  });

  afterEach(() => {
    getAgentsStub.restore();
  })

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
    const testAgent = 'Tess Tagent';
    getAgentsStub.returns([testAgent]);

    const sut = shallow(<AgentSelector />);

    const agent = sut.find('li');
    expect(agent.text()).to.contain(testAgent);
  });

  it('should update the title when an agent is clicked', function() {
    const testAgent = 'Tess Tagent';
    getAgentsStub.returns([testAgent]);

    const sut = shallow(<AgentSelector />);
    sut.find('button').simulate('click');

    const header = sut.find('h1');
    expect(header.text()).to.equal(`You selected agent: ${testAgent}`);
  });
});
