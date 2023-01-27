import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conversor-de-moedas';

  moedas: any;

  enviar($event){
    console.log($event);
    this.moedas = $event;
  }
}
