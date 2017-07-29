import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme';
import { stub } from 'sinon';
chai.use(chaiEnzyme());

const l = console.log;
let agentService, AgentSelector;

describe("AgentSelector", function() {
  beforeEach(() => {
    AgentSelector = require('../agent-selector').default;

    agentService = require('../agent-service');
    stub(agentService, 'getAgents').returns(['Hi!']);
  });

  it("contains spec with an expectation", function() {
    const sut = shallow(<AgentSelector />);
    const header = sut.find('h1');
    expect(header.text()).to.equal('Select an agent');
  });
});
