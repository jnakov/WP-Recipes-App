import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { RecipesContainerModule } from '../recipes-container/recipes-container.module';
import { CreateRecipeModule } from '../create-recipe/create-recipe.module';



@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    RecipesContainerModule,
    CreateRecipeModule
  ],
  exports:[
    AdminPageComponent
  ]
})
export class AdminPageModule { }
