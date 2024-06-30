import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeModule } from './home/home.module';
import { AuthorizationModule } from './authorization/authorization.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    HomeModule,
    AuthorizationModule,
    
  ]
})
export class ViewsModule { }