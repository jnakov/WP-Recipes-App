import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppStore } from 'src/angular-core/ng-store/ng-redux.store';
import { Recipe } from 'src/angular-core/models/recipe-app.models';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  State:IAppStore;
  selected:Recipe;

  constructor(private ngRedux:NgRedux<IAppStore>) { }

  ngOnInit(): void {
    this.State = this.ngRedux.getState();
    this.selected = this.State.selectedRecipe;
    debugger;
  }

}
