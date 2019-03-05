import { Component, OnInit } from '@angular/core';
import { Recipe } from './Model/recipe.model'

@Component({
  selector: 'acp-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(selectedRecipe: Recipe)
  {
    this.currentRecipe = selectedRecipe;
  }

}
