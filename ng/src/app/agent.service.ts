import { Injectable } from '@angular/core';

@Injectable()
export class AgentService {

  getAgents() {
      return [
      'James Bond',
      'Boris & Natasha',
      'Duchess',
      'Burt Macklin',
      'Rex Buckingham',
    ];
  }
}
