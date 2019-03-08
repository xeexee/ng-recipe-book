import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../Model/recipe.model'
import { ShoppingListService } from 'src/app/ShoppingList/shopping-list.service';
import { Ingredient } from 'src/app/ShoppingList/Model/ingredient.model';

@Component({
  selector: 'acp-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList()
  {
    this.shoppinglistService.addIngredients(this.recipe.ingredients);
  }
}
