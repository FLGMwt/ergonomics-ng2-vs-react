import { TestBed, async } from '@angular/core/testing';

import { AgentSelectorComponent } from './agent-selector.component';
import { AgentService } from './agent.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AgentListComponent } from './agent-list.component';

class AgentServiceStub {
  getAgents() { }
}

let fixture, app, agentService;

describe('AgentSelectorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgentSelectorComponent,
      ],
      providers: [
        { provide: AgentService, useClass: AgentServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA] // *** all or nothing "ignore" failures in template
    }).compileComponents();

    fixture = TestBed.createComponent(AgentSelectorComponent);
    app = fixture.debugElement.componentInstance;

    // *** must be pulled from the instance's injector (instead of a AgentServiceStub instance) because services are cloned
    agentService = fixture.debugElement.injector.get(AgentService);
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render the default title', async(() => {
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Select an agent');
  }));

  it('should render list of agents', async(() => {
    const testAgent = 'Tess Tagent';
    const spy = spyOn(agentService, 'getAgents').and.returnValue([testAgent]);

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(spy).toHaveBeenCalled();
    const agentList = compiled.querySelector('agent-list');
    expect(agentList).not.toBeNull();
    // *** can't assert on agentList's properties
  }));

});
