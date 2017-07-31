import { Component, OnInit } from '@angular/core';
import { AgentService } from './agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './agent-selector.component.html',
  styleUrls: ['./agent-selector.component.css']
})
export class AgentSelectorComponent implements OnInit {

  agents: Array<string>;
  selectedAgent: string;
  title = 'Select an agent';

  constructor(
    private agentService: AgentService,
  ) { }

  // *** *cannot* be done in the constructor because the spy has to happen after instantiation (testing code drives implementation)
  ngOnInit() {
    this.agents = this.agentService.getAgents();
  }

  handleAgentSelected(agentIndex: number) {
    const agentName = this.agents[agentIndex];
    this.selectedAgent = agentName;
    this.title = `You selected agent: ${agentName}`;
  }
}
