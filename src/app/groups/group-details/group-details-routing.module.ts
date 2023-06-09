import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDetailsComponent } from './group-details.component';

const routes: Routes = [
  {
    path: '',
    component: GroupDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupDetailsRoutingModule { }
