import { NgModule } from '@angular/core';

import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../Shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../ShoppingList/shopping-list.service';
import { RecipeService } from '../RecipeBook/recipe.service';
import { HttpService } from '../http-service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ShoppingListService, RecipeService, HttpService, AuthService, AuthGuard],
})
export class CoreModule {}