import { UserRegister, UserLogin } from 'src/angular-core/models/user.model';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class UserManager{
    constructor(){}

    register(user:UserRegister){
        console.log(user);
        debugger;
    }

    login(user:UserLogin){
        console.log(user);
        debugger;
    }
}