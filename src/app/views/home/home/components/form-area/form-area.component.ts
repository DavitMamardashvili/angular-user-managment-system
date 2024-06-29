import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/createUser';
import { UserRole } from '../../enums/roles';
import { NgForm } from '@angular/forms';
import { FormValidationService } from '../../../../../core/service/validations/form-validation.service';
import { ValidationTypes } from '../../../../../core/enums/validation';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.css']
})
export class FormAreaComponent {
  newRole: string = '';

  @Input() userUpdateData: User = new User();
  @Output() formAlertIsVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() registerUpdate: EventEmitter<User> = new EventEmitter<User>();


  constructor(public formValidationService:FormValidationService){

  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    this.registerUpdate.emit(this.userUpdateData);
  }

  onCancel() {
    this.formAlertIsVisibleChange.emit(false);
    this.userUpdateData = new User();
  }

  addRole(newRole: string) {
    const role = newRole.trim();
    if (role && !this.userUpdateData.roles.includes(role) && this.isValidRole(role)) {
      this.userUpdateData.roles.push(role);
    }
  }

  onKeyUp(event: KeyboardEvent, roleInput: HTMLInputElement) {
    if (event.code === 'Space') {
      this.addRole(roleInput.value);
      roleInput.value = '';
    }
  }

  isValidRole(role: string): boolean {
    return Object.values(UserRole).includes(role as any);
  }

  removeRole(role: string) {
    this.userUpdateData.roles = this.userUpdateData.roles.filter((r: string) => r !== role);
  }
}
