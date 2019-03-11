import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { NgDatepickerModule } from 'ng2-datepicker';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomCookieService } from '../common/service/cookie.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../common/service/http.service';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgDatepickerModule
  ],
  providers: [
    AuthService,
    DatePipe,
    CookieService,
    CustomCookieService,
    HttpService
  ],
  bootstrap: []
})
export class AuthModule { }
