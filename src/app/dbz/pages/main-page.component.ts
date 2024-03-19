import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(  private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.onDeleteCharacterById(id)
  }

  onNewCharacter( character:Character ):void {
    this.dbzService.addNewCharacter(character)
  }


}
