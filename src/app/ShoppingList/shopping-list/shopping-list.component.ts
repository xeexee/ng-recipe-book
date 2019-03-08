import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Model/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'acp-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe((changedIngredients: Ingredient[]) =>
      {
        this.ingredients = changedIngredients;
      });
  }
}
