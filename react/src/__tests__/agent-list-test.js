import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

const l = console.log;
let AgentList;

describe('AgentList', function() {
  beforeEach(() => {
    AgentList = require('../agent-list').default;
  });

  it('should render a list of agents', function() {
    const testAgent = 'Tess Tagent';

    const sut = shallow(<AgentList agents={[testAgent]} />);

    const agent = sut.find('li');
    expect(agent.length).to.equal(1);
    expect(agent.text()).to.contain(testAgent);
  });

  it('should highlight the selected agent', function() {
    const testAgent = 'Tess Tagent';
    const testAgents = [testAgent, 'Other Agent'];

    const sut = shallow(<AgentList selectedAgent={testAgent} agents={testAgents} />);

    const agents = sut.find('li');
    const selectedAgent = agents.at(0);
    expect(selectedAgent.props().style.backgroundColor).to.equal('green');
    const otherAgent = agents.at(1);
    expect(otherAgent.props().style.backgroundColor).to.equal('inherit');
  });

  it('should call the supplied select handler when an agent is clicked', function() {
    const testAgent = 'Tess Tagent';
    const selectHandler = stub();

    const sut = shallow(<AgentList onSelectAgent={selectHandler} agents={[testAgent]} />);

    const agentSelector = sut.find('button');
    agentSelector.simulate('click');
    expect(selectHandler).to.have.been.calledWith(0);
  });

});