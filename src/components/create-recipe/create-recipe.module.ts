import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecipeComponent } from './create-recipe.component';



@NgModule({
  declarations: [CreateRecipeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CreateRecipeComponent
  ]
})
export class CreateRecipeModule { }
