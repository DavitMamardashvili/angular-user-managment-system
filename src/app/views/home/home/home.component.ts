import { Component, ViewChild } from '@angular/core';
import { User } from './models/createUser';
import { HttpService } from '../../../core/service/http/http.service';
import { ListAreaComponent } from './components/list-area/list-area.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchingData: string = "";
  formAlertIsVisibal = false;
  user: User = new User();

  @ViewChild('listArea') listAreaComponent!: ListAreaComponent;

  constructor(private http: HttpService) { }

  addUser(user: User) {
    if (user.id === 0) {
      this.http.createItem(user).subscribe(() => {
        this.listAreaComponent.itemIsAddOtUpdate();
      });
    } else {
      this.http.updateItem(user).subscribe(() => {
        this.listAreaComponent.itemIsAddOtUpdate();
      });
    }
    this.user = new User();
    this.formAlertIsVisibal = false;
  }

  deleteUser(id: number) {
    this.http.deleteItem(id).subscribe(() => {
      this.listAreaComponent.itemIsAddOtUpdate();
    });
  }

  updateUserAlert(user: User) {
    this.formAlertIsVisibal = true;
    this.user = user;
  }

  canselAlert(event: boolean) {
    this.formAlertIsVisibal = false;
    this.user = new User();
  }
}
