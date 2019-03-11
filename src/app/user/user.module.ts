import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthService } from '../auth/services/auth.service';
import { CustomCookieService } from '../common/service/cookie.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../common/service/http.service';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserAddEditComponent,
    UserListComponent
  ],
  imports: [
    UserRoutingModule
  ],
  providers: [
    AuthService,
    CustomCookieService,
    CookieService,
    HttpService
  ],
  bootstrap: []
})
export class UserModule { }
