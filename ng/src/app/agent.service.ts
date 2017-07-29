import { Injectable } from '@angular/core';

@Injectable()
export class AgentService {

  codeNames = [
    'James Bond',
    'Boris & Natasha',
    'Duchess',
    'Burt Macklin',
    'Rex Buckingham',
  ];

  getAgents() {
    return this.codeNames;
  }
}
