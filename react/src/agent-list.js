import React from 'react';

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
  );
}

export default AgentList;
