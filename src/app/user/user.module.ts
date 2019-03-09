import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserAddEditComponent,
    UserListComponent
  ],
  imports: [
    UserRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
