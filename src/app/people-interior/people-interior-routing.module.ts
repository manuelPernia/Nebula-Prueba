import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleInteriorComponent } from './people-interior.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleInteriorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleInteriorRoutingModule {}
