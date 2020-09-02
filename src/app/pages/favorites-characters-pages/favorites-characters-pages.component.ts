import { Component, OnInit } from '@angular/core';
import { FavoritesCharactersService } from '../../shared/services/local/favorites-characters.service';

@Component({
  selector: 'app-favorites-characters-pages',
  templateUrl: './favorites-characters-pages.component.html',
  styleUrls: ['./favorites-characters-pages.component.scss']
})

export class FavoritesCharactersPagesComponent implements OnInit {

  favoritesCharacters;
  constructor (private favoritesCharactersService: FavoritesCharactersService) { }

  ngOnInit() {
   this.favoritesCharacters = this.favoritesCharactersService.getFavoritesCharacters()
  }
}
