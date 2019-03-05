import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Model/ingredient.model'

@Component({
  selector: 'acp-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("Banana",2)
  ];

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
  }
}
