import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const shoppingRoutes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(shoppingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingListRoutingModule {}