import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgentSelectorComponent } from './agent-selector.component';
import { AgentService } from './agent.service';

@NgModule({
  declarations: [
    AgentSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AgentService,
  ],
  bootstrap: [AgentSelectorComponent]
})
export class AppModule { }
