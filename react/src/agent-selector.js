import React, { Component } from 'react';
import { getAgents } from './agent-service';

const AgentList = ({agents, selectedAgent, onSelectAgent}) => {
  const agentStyle = agent => ({
    fontSize: 40,
    border: '1px solid',
    backgroundColor: agent === selectedAgent ? 'green' : 'inherit',
  });
  return (
    <ul>
      {agents.map((agent, i) =>
        <li key={agent} style={agentStyle(agent)} >
          {agent}
          <button onClick={() => onSelectAgent(i)}>
            Select this agent
          </button>
        </li>
      )}
    </ul>
  )
}

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
