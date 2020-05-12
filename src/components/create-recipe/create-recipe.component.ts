import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Recipe } from 'src/angular-core/models/recipe-app.models';

@Component({
  selector: 'create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  formRecipe:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formRecipe = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description:  new FormControl('', [Validators.required]),
      image:  new FormControl('', [Validators.required]),
      veggie:  new FormControl('', [Validators.required]),
      numberIngredients: new FormControl('', [Validators.required]),
      ingredients: new FormArray([])
    });
  }

  get form(){return this.formRecipe.controls}
  get ingredients(){return this.form.ingredients as FormArray}

  onNumberChange(event){
      const numIngredients = event.target.value as number || 0;
      if(this.ingredients.length < numIngredients){
        for(let i = 0; i < numIngredients; i++){
            this.ingredients.push(this.formBuilder.group({
                ingredient: ['', Validators.required]
            }));
        }
      }else{
        for(let i = this.ingredients.length; i >= numIngredients; i--){
            this.ingredients.removeAt(i);
        }
      }
  }

  onSubmit(){
    const recipe:Recipe = {
      name:'',
      description: '',
      veggie: false,
      image: '',
      ingredients: []
    };
    recipe.name = this.formRecipe.get('name').value;
    recipe.description = this.formRecipe.get('description').value;
    recipe.image = this.formRecipe.get('image').value;
    recipe.veggie = this.formRecipe.get('veggie').value;
    const ingredients = this.formRecipe.get('ingredients').value;
    ingredients.forEach(element => {
        recipe.ingredients.push(element);
    });
    console.log(recipe);
    debugger;

  }

}
