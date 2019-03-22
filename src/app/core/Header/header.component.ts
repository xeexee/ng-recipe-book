import { Component } from '@angular/core'
import { HttpService } from '../../http-service';
import { RecipeService } from '../../RecipeBook/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'acp-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private httpService: HttpService, private recipeService: RecipeService, private authService: AuthService) { }

    onSaveData() {
        this.httpService.SaveData()
            .subscribe((response: Response) => {
                console.log(response);
            });
    }

    onFetchData() {
        this.httpService.FetchData();            
    }

    onLogout()
    {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}