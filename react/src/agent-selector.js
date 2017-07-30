import React, { Component } from 'react';
import { getAgents } from './agent-service';
import AgentList from './agent-list';

export default class AgentSelector extends Component {

  state = {
    title: 'Select an agent',
    agents: [],
  }

  componentDidMount() {
    this.setState({
      agents: getAgents(),
    });
  }

  handleClick = agentIndex => {
    const agentName = this.state.agents[agentIndex];
    this.setState({
      selectedAgent: agentName,
      title: `You selected agent: ${agentName}`
    });
  }

  render() {
    const { agents, title, selectedAgent } = this.state;
    return (
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>
          {title}
        </h1>
        <AgentList
          selectedAgent={selectedAgent}
          agents={agents}
          onSelectAgent={this.handleClick}
          />
      </div>
    );
  }
}
