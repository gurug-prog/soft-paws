import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsManagementComponent } from './cats-management.component';

const routes: Routes = [
  { 
    path: '',
    component: CatsManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsManagementRoutingModule {}
