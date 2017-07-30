import { TestBed, async } from '@angular/core/testing';

import { AgentListComponent } from './agent-list.component';

let fixture, comp: AgentListComponent;

describe('AgentListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgentListComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentListComponent);
    comp = fixture.componentInstance;
  });

  it('should create the component', async(() => {
    expect(comp).toBeTruthy();
  }));

  it('should render a list of agents', (() => {
    const testAgent = 'Tess Tagent';
    comp.agents = [testAgent];

    fixture.detectChanges();

    const agents = fixture.debugElement.nativeElement.querySelectorAll('li');
    expect(agents.length).toEqual(1);
    expect(agents[0].innerHTML).toContain(testAgent);
  }));

  it('should add a "selected" class to the selected agent', () => {
    const testAgent = 'Tess Tagent';
    comp.agents = [testAgent, 'Other Agent'];
    comp.selectedAgent = testAgent;

    fixture.detectChanges();

    const agents = fixture.debugElement.nativeElement.querySelectorAll('.agent');
    const selectedAgent = agents[0];
    expect(selectedAgent.className).toContain('selected');
    const otherAgent = agents[1];
    expect(otherAgent.className).not.toContain('selected');
  });

  it('should call emit on agent click emitter when agent clicked', () => {
    const testAgent = 'Tess Tagent';
    comp.agents = [testAgent];
    spyOn(comp.onAgentClicked, 'emit');

    fixture.detectChanges();
    const agentSelector = fixture.debugElement.nativeElement.querySelector('button');
    agentSelector.click();
    fixture.detectChanges();

    expect(comp.onAgentClicked.emit).toHaveBeenCalledWith(0);
  });

});
