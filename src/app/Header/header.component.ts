import {Component, EventEmitter, Output} from '@angular/core'

@Component({
    selector: 'acp-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent
{
    @Output() onFeatureSelected = new EventEmitter<string>();
    navigateToRecipes()
    {
        this.onFeatureSelected.emit("recipe");
    }
    navigateToShoppingList()
    {
        this.onFeatureSelected.emit("shopping-list");
    }
}