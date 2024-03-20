import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptsComponent } from './concepts.component';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';
import { RxJSComponent } from './RxJS/rx-js/rx-js.component';

const routes: Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'hooks',component: ParentComponent},
  { path: 'rxjs',component: RxJSComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptsRoutingModule { }
