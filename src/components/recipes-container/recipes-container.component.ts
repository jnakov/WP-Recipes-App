import { Component, OnInit } from '@angular/core';
import { RecipesMockService } from 'src/angular-core/services/recipes-mock.service';
import { Recipe } from 'src/angular-core/models/recipe-app.models';
import {NgRedux} from 'ng2-redux'
import { IAppStore } from 'src/angular-core/ng-store/ng-redux.store';
import { SELECT } from 'src/angular-core/const/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes-container.component.html',
  styleUrls: ['./recipes-container.component.scss']
})
export class RecipesContainerComponent implements OnInit {

  recipes:Recipe[];
  pageSize:number = 3;
  page:number = 0;
  numPages:number = 0;
  collectionSize:number = 0;

  constructor(private recipesService:RecipesMockService,
              private ngRedux : NgRedux<IAppStore>,
              private router: Router) {
               }

  ngOnInit(): void {
    this.recipesService.getByPage(this.page, this.pageSize).subscribe((data) => {
        this.recipes = data;
    });
    this.collectionSize = this.recipesService.getSize();
    this.numPages = Math.ceil(this.collectionSize/this.pageSize);
  }


  previousPage(){
    if(this.page === 0) return;

    this.page--;
    this.recipesService.getByPage(this.page, this.pageSize).subscribe((data) => {
      this.recipes = data;
  });
  }
  nextPage(){
    if((this.page+1) === this.numPages) return;
    
    this.page++;

    this.recipesService.getByPage(this.page, this.pageSize).subscribe((data) => {
      this.recipes = data;
  });
  }

  recipeOnClick(recipe:Recipe){
    console.log(recipe);
    this.ngRedux.dispatch({type: SELECT, selected: recipe});
    this.router.navigateByUrl('recipe');
  }

}
