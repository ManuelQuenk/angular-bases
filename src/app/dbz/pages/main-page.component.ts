import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 950
    },
    {
      name: 'Goku',
      power: 9600
    },
    {
      name: 'Vegeta',
      power: 6200
    },

  ]

  addNewCharacter ( character : Character ):void {
    debugger;
    console.log(character)
    this.characters.push(character)
  }
}
