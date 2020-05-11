import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details.component';



@NgModule({
  declarations: [RecipeDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    RecipeDetailsComponent
  ]
})
export class RecipeDetailsModule { }
