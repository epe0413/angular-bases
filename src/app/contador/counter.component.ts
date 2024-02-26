import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter(0)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent{
  constructor(){}

  public counter: number = 0;

  increaseBy( value: number): void {
    if(value >= 0){
      this.counter += value;
    }

  }
  resetCounter( value: number ) {
    this.counter = value;
  }
}
