import { TestBed, async } from '@angular/core/testing';

import { AgentSelectorComponent } from './agent-selector.component';
import { AgentService } from './agent.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class AgentServiceStub {
  getAgents() { }
}

let fixture, app, agentService;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgentSelectorComponent
      ],
      providers: [
        { provide: AgentService, useClass: AgentServiceStub }
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AgentSelectorComponent);
    app = fixture.debugElement.componentInstance;
    // must be pulled from the instance's injector (instead of a AgentServiceStub instance) because services are cloned
    agentService = fixture.debugElement.injector.get(AgentService);
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('Select an agent');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Select an agent');
  }));

  it('should render title in a h1 tag', async(() => {
    const testAgent = 'Tess Targent';
    const spy = spyOn(agentService, 'getAgents').and.returnValue([testAgent]);

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(spy).toHaveBeenCalled();
    expect(compiled.querySelector('li').textContent).toContain(testAgent);
  }));

});
