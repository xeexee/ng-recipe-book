import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from "../Model/ingredient.model"
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'acp-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') shoppingListForm: NgForm;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.shoppingListForm.setValue(
          {
            "name": this.editedItem.name,
            "amount": this.editedItem.amount
          }
        )
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppinglistService.updateIngredient(this.editItemIndex, ingredient);
    }
    else {
      this.shoppinglistService.addIngredient(ingredient);
    }

    this.resetForm();
  }

  onDelete() {
    if (this.editMode) {
      this.shoppinglistService.deleteIngredient(this.editItemIndex);
      this.resetForm();
    }
  }

  resetForm() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }
}
