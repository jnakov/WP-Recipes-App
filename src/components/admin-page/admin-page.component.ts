import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public show:boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  createRecipe(){
    this.show = !this.show;
  }

}
