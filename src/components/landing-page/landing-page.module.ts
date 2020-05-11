import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RecipesContainerModule } from '../recipes-container/recipes-container.module';
import { RegisterModule } from '../register/register.module';
import { CarouselModule } from '../carousel/carousel.module';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    RecipesContainerModule,
    RegisterModule,
    CarouselModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
