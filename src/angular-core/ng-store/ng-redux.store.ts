import { Recipe } from '../models/recipe-app.models';
import { SELECT } from '../const/actions';

export interface IAppStore{
    selectedRecipe:Recipe;
}

export const INITIAL_STATE:IAppStore = { selectedRecipe : null};

export function rootReducer(state, action){

    switch(action.type){
        case SELECT:
            return { selectedRecipe: action.selected};
    }

    return state;
}