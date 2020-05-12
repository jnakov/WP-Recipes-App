import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class RecipesService{
    private base_url = 'http://localhost:8080';
    private get_recipes = `${this.base_url}/recipes`;

    constructor(private httpService : HttpClient){

    }

    async getRecipes(){
        return this.httpService.get(this.get_recipes);
    }
}