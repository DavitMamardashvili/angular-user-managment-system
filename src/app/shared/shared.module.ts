import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmAlertComponent } from './alerts/confirm-alert/confirm-alert.component';
import {MatButtonModule} from '@angular/material/button';
import { ErrorMessageComponent } from './message/error-message/error-message.component';



@NgModule({
  declarations: [
    ConfirmAlertComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [  
    ConfirmAlertComponent,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
