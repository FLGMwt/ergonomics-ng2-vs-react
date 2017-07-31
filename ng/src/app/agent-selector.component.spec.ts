import { TestBed, async } from '@angular/core/testing';

import { AgentSelectorComponent } from './agent-selector.component';
import { AgentService } from './agent.service';

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
    }).compileComponents();

    fixture = TestBed.createComponent(AgentSelectorComponent);
    app = fixture.debugElement.componentInstance;

    // must be pulled from the instance's injector (instead of a AgentServiceStub instance) because services are cloned
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
    expect(compiled.querySelector('li').textContent).toContain(testAgent);
  }));

  it('should update the title when an agent is clicked', async(() => {
    const testAgent = 'Tess Tagent';
    const spy = spyOn(agentService, 'getAgents').and.returnValue([testAgent]);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const agentButton = fixture.debugElement.nativeElement.querySelector('button');
    agentButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('h1').textContent).toEqual(`You selected agent: ${testAgent}`);
  }));

});
