import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FilterAreaComponent } from './home/components/filter-area/filter-area.component';
import { ListAreaComponent } from './home/components/list-area/list-area.component';
import { FormAreaComponent } from './home/components/form-area/form-area.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    HomeComponent,
    FilterAreaComponent,
    ListAreaComponent,
    FormAreaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    FormsModule,
    SharedModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule
  ],
    exports:[
    HomeRoutingModule
  ]
})
export class HomeModule { }
