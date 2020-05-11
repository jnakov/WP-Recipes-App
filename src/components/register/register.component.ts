import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegister } from 'src/angular-core/models/user.model';
import { UserManager } from 'src/angular-core/services/user-services/user-manager.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegister:UserRegister = {username:'',email:'',password:'',confirm:false};
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^.{8,24}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^.{4,16}$')]),
    confirm: new FormControl('', [Validators.required, Validators.pattern('^.{4,16}$')])
  });

  doPasswordsMatch:boolean = true;

  constructor(private userManager:UserManager) { }

  ngOnInit(): void {
    
  }

  submit(){
        this.userRegister.username = this.registerForm.get('username').value;
        this.userRegister.email = this.registerForm.get('email').value;
        this.userRegister.password = this.registerForm.get('password').value;
        this.userRegister.confirm = true;
        this.userManager.register(this.userRegister);
        debugger;
  }

  passwordKeyUp(){
    this.doPasswordsMatch = this.registerForm.get('password') === this.registerForm.get('confirm');
  }

}
