import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})


export class ListComponent {

  @Input()
  public charactersList: Character[] = [{
    name:'Trunks',
    power:50
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()


  onDeleteCharacter( id?: string ):void {

    if ( !id ) return;

    this.onDelete.emit(id)
  }

  // public onNewCharacter: EventEmitter<Character> = new EventEmitter();


 }
