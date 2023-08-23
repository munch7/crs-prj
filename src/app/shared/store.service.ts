import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({providedIn: 'root'})
export class StoreService {
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    StoreRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://crs-prj-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes).subscribe(response => {
            console.log(response);
        });
    }

   FetchRecipes(){
    this.http.get<Recipe[]>('https://crs-prj-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
    .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
    });
}

}