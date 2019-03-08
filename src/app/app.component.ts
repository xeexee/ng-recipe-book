import { Component } from '@angular/core';
import { ShoppingListService } from './ShoppingList/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ShoppingListService ]
})
export class AppComponent {

  currentFeature: string = "recipe";

  constructor(private shoppingListService: ShoppingListService) {}

  onNavigate(featureSelected: string)
  {
    this.currentFeature = featureSelected;
  }
}
