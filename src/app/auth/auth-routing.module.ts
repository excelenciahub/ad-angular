import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AnonymousGuardGuard } from '../anonymous-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuardGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AnonymousGuardGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [AnonymousGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
