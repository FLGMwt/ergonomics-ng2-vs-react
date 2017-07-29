import { Component } from '@angular/core';
import { AgentService } from './agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './agent-selector.component.html',
  styleUrls: ['./agent-selector.component.css']
})
export class AgentSelectorComponent {

  agents: Array<string>;

  constructor(
    agentService: AgentService,
  ) {
    this.agents = agentService.getAgents();
  }

  title = 'Click one of the things';

  handleClick(agentIndex: number) {
    const agentName = this.agents[agentIndex];
    this.title = `You selected agent: ${agentName}`;
  }
}
