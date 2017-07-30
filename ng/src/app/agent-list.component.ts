import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent {

  @Input() agents: Array<string>;
  @Input() selectedAgent: string;
  @Output() onAgentClicked = new EventEmitter<number>();

}
