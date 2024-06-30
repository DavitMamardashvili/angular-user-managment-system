import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { SingInComponent } from './authorization/pages/sing-in/sing-in.component';
import { RegisterComponent } from './authorization/pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "../../shared/shared.module"; 
import { ErrorMessageComponent } from '../../shared/message/error-message/error-message.component';

@NgModule({
    declarations: [
        AuthorizationComponent,
        SingInComponent,
        RegisterComponent,
        
    ],
    exports: [
        AuthorizationRoutingModule,
        SingInComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AuthorizationRoutingModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        SharedModule,
        
        
    ]
})
export class AuthorizationModule { }
