import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

 }
