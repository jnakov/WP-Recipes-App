import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecipeComponent } from './create-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateRecipeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CreateRecipeComponent
  ]
})
export class CreateRecipeModule { }
