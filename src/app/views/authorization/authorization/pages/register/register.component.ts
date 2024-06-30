import { Component } from '@angular/core';
import { FormValidationService } from '../../../../../core/service/validations/form-validation.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserAuth } from '../../models/autorization';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hidePassword = true;
  confirmPassword = true;
  constructor(public formValidationService: FormValidationService ,private http: HttpClient) { }

  onFormSubmit(form: NgForm) { 
    if (!form.valid || form.value.password !== form.value.confirmPassword) {
      return; 
    }

    let request = new UserAuth(form.value)

    console.log(request)

    this.http.post("https://localhost:7157/api/Auth/register",request).subscribe(resp => console.log(resp))

  }
}
