import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from "../Model/ingredient.model"

@Component({
  selector: 'acp-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;
  @Output("ingredientAdded") ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem()
  {
    var ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.ingredientAdded.emit(ingredient);
  }

}
