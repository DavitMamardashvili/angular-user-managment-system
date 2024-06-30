import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateManagmentService {

  constructor() { }

  setToken(token:string){
    localStorage['token']=token
  }

  getToken():string{
    return localStorage['token'];
  }

  tokenIsExist(){
    const token = this.getToken();
    return token.length > 0;
  }

  getUserInfo():any{
    return JSON.parse(localStorage['userInfo'])
  }

  setUserInfo(userInfo:any){
    localStorage['userInfo'] = JSON.stringify(userInfo);
  }
}
