import { Component } from '@angular/core';

import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private storeService: StoreService){}

  SaveData(){
    this.storeService.StoreRecipes();
  }

  FetchData(){
    this.storeService.FetchRecipes();
  }

}
