import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesCharactersService {

 private favoritesCharacters = [];

  constructor() { }

addNewFavoriteCharacter(newFavoriteCharacter){
this.favoritesCharacters.push(newFavoriteCharacter);
}

getFavoritesCharacters(){
return this.favoritesCharacters;
}
}
