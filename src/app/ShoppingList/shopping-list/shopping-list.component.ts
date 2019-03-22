import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../Model/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'acp-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    
    this.subscription = this.shoppinglistService.ingredientsChanged.subscribe((changedIngredients: Ingredient[]) =>
      {
        this.ingredients = changedIngredients;
      });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number)
  {
    this.shoppinglistService.startedEditing.next(index);
  }
}
