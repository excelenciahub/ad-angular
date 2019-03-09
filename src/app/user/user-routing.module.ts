import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user-dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'user-add-edit',
    component: UserAddEditComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: '**',
    redirectTo: 'user-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
