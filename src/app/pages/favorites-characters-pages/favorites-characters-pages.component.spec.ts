import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesCharactersPagesComponent } from './favorites-characters-pages.component';

describe('FavoritesCharactersPagesComponent', () => {
  let component: FavoritesCharactersPagesComponent;
  let fixture: ComponentFixture<FavoritesCharactersPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesCharactersPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesCharactersPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
