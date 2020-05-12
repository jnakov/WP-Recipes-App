import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'src/components/header/header.module';
import { CarouselModule } from 'src/components/carousel/carousel.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { RecipesContainerModule } from 'src/components/recipes-container/recipes-container.module';
import {NgxPaginationModule} from 'ngx-pagination'
import { AboutModule } from 'src/components/about/about.module';
import { RegisterModule } from 'src/components/register/register.module';
import { LandingPageModule } from 'src/components/landing-page/landing-page.module';
import {NgRedux, NgReduxModule} from 'ng2-redux'
import { RecipeDetailsModule } from 'src/components/recipe-details/recipe-details.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageModule } from 'src/components/admin-page/admin-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CarouselModule,
    NgbModule,
    RecipesContainerModule,
    NgxPaginationModule,
    AboutModule,
    RegisterModule,
    LandingPageModule,
    NgReduxModule,
    RecipeDetailsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
