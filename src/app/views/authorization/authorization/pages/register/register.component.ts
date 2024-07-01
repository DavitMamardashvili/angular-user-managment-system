import { Component } from '@angular/core';
import { FormValidationService } from '../../../../../core/service/validations/form-validation.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserAuth } from '../../models/autorization';
import { HttpService } from '../../../../../core/service/http/http.service';
import { response } from 'express';
import { MatDialog } from '@angular/material/dialog';
import { SuccessAlertComponent } from '../../../../../shared/alerts/success-alert/success-alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hidePassword = true;
  confirmPassword = true;
  constructor(public formValidationService: FormValidationService, private http: HttpService , private dialog: MatDialog) { }

  onFormSubmit(form: NgForm) {
    if (!form.valid || form.value.password !== form.value.confirmPassword) {
      return;
    }

    let request = new UserAuth(form.value)

    this.http.createItem("Auth/register", request).subscribe(response => {
      if(response){
        this.dialog.open(SuccessAlertComponent);
      }
    })

  }
}
