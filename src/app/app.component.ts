import { TranferenciaService } from './component/conversor/services/tranferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'conversor-de-moedas';




  moedas: any[] = [];


}
