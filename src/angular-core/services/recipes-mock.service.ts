import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe-app.models';
import { Observable, of } from 'rxjs';
import {RECIPES} from '../const/recipes-mock'

@Injectable({
  providedIn: 'root'
})
export class RecipesMockService {

  constructor() { }

  getRecipes() : Observable<Recipe[]>{
      return of(RECIPES);
  }

  getByPage(pageNumber, recipesPerPage=3) : Observable<Recipe[]>{
      return of(RECIPES.slice(pageNumber*recipesPerPage, (pageNumber*recipesPerPage) + recipesPerPage));
  }

  getSize(){
    return RECIPES.length;
  }
}
