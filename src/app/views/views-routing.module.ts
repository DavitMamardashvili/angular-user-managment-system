import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';
import { SingInComponent } from './authorization/authorization/pages/sing-in/sing-in.component';
import { RegisterComponent } from './authorization/authorization/pages/register/register.component';
import { authGuard } from '../core/service/guards/auth.guard';
import { noAuthGuard } from '../core/service/guards/no-auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in', 
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthorizationComponent,
    canActivate:[authGuard],

    children: [
      { path: 'sign-in', component: SingInComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[noAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
