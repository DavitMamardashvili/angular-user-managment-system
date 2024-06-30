import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormValidationService } from '../../../../../core/service/validations/form-validation.service';
import { UserAuth } from '../../models/autorization';
import { HttpClient } from '@angular/common/http';
import { UserStateManagmentService } from '../../../../../core/service/state-manager/user-state-managment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']  
})
export class SingInComponent {
  hidePassword = true;

  constructor(
    public formValidationService: FormValidationService, 
    private http: HttpClient, 
    private userStateManagmentService: UserStateManagmentService,
    private router: Router  
  ) { }

  onFormSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    let request = new UserAuth(form.value);

    this.http.post("https://localhost:7157/api/Auth/login", request).subscribe((response: any) => {
      this.userStateManagmentService.setToken(response.jwt);
      this.router.navigate(['/home']); 
    });
  }
}
