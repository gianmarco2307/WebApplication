import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApplication';
  mainText!: string;
  secondText!: string;
  quarantaquattro: number = 44;
  uno: number = 1
  counter: number[] = [10, Number("23"), this.quarantaquattro, 57, this.uno, Number("2")];
  
  constructor(){

  }
}
