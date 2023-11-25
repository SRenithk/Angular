import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptsComponent } from './concepts.component';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';

const routes: Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'hooks',component: ParentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptsRoutingModule { }
