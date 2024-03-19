import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 950
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9600
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 6200
    },

  ]

  addNewCharacter ( character : Character ):void {

    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter)
  }

  onDeleteCharacterById ( id: string):void {
    this.characters = this.characters.filter(character => character.id !== id)

  }

}
