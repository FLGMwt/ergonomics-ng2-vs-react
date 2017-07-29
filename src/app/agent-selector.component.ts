import { Component, OnInit } from '@angular/core';
import { AgentService } from './agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './agent-selector.component.html',
  styleUrls: ['./agent-selector.component.css']
})
export class AgentSelectorComponent implements OnInit {

  agents: Array<string>;

  constructor(
    private agentService: AgentService,
  ) { }

  title = 'Select an agent';

  // *cannot* be done in the constructor because the spy has to happen after instantiation
  ngOnInit() {
    this.agents = this.agentService.getAgents();
  }

  handleClick(agentIndex: number) {
    const agentName = this.agents[agentIndex];
    this.title = `You selected agent: ${agentName}`;
  }
}
