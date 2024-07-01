import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmAlertComponent } from './alerts/confirm-alert/confirm-alert.component';
import {MatButtonModule} from '@angular/material/button';
import { ErrorMessageComponent } from './message/error-message/error-message.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';



@NgModule({
  declarations: [
    ConfirmAlertComponent,
    ErrorMessageComponent,
    SuccessAlertComponent
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
