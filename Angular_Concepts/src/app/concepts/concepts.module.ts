import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { ConceptsComponent } from './concepts.component';
import { HooksComponent } from './life-cycle-hooks/hooks/hooks.component';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';
import { RxJSComponent } from './RxJS/rx-js/rx-js.component';


@NgModule({
  declarations: [
    ConceptsComponent,
    HooksComponent,
    ParentComponent,
    RxJSComponent
  ],
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ]
})
export class ConceptsModule { }
