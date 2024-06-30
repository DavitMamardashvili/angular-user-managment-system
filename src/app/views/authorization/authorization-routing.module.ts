import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './authorization/pages/sing-in/sing-in.component';
import { RegisterComponent } from './authorization/pages/register/register.component';

  const routes: Routes = [
    {
      path: '', component: AuthorizationComponent,
       children: [
        { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
        { path: 'sign-in', component: SingInComponent },
        { path: 'register', component: RegisterComponent },
      ]
    },
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
