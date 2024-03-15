import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public playerNames: string[] = [
    'Dibu',
    'Molina',
    'Cuti',
    'Licha',
    'Tagliafico',
    'Paredes',
    'De Paul',
    'MacAllister',
    'Messi',
    'Julian',
    'Garnacho',
  ];

  public expulsadoPlayer?: string;

  removePlayer(): void {
    this.expulsadoPlayer = this.playerNames.pop();
  }
}
