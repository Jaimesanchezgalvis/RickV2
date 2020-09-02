import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharactersService } from '../../services/characters.service';
import { FavoritesCharactersService } from '../../services/local/favorites-characters.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() characters;

  constructor(private favoritesCharactersService: FavoritesCharactersService ) { }

  ngOnInit(): void {

  }

  addNewFavoriteCharacter(character) {
this.favoritesCharactersService.addNewFavoriteCharacter(character)
  }

}
