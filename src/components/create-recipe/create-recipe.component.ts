import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  formRecipe:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description:  new FormControl('', [Validators.required]),
    image:  new FormControl('', [Validators.required]),
    veggie:  new FormControl('', [Validators.required]),
    numberIngredients: new FormControl('', [Validators.required]),
    ingredients: new FormArray([])
  });
  constructor() { }

  ngOnInit(): void {
  }

  get form(){return this.formRecipe.controls}
  get ingredients(){return this.form.numberIngredients as FormArray}

  onNumberChange(event){

  }

}
