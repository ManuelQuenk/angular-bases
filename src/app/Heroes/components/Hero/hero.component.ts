import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Dybala'
  public age:  number = 29

  get capitalizeName ():string {
    return this.name.toUpperCase()
  }

  getHeroDescription () {
    return `${this.name} | ${this.age}`
  }

  changeHero():void {
    this.name = 'Milito'
  }

  changeAge():void {
    this.age = 31
  }

  resetForm(): void {
    this.name = 'Dybala'
    this.age = 29
  }
}
