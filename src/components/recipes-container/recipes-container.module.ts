import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesContainerComponent } from './recipes-container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgReduxModule} from 'ng2-redux'



@NgModule({
  declarations: [RecipesContainerComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgReduxModule
  ],
  exports:[
    RecipesContainerComponent
  ]
})
export class RecipesContainerModule { }
