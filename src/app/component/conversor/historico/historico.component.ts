import { TranferenciaService } from './../../../conversor/services/tranferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  historico:any[];

  constructor(private TranferenciaService: TranferenciaService){}

  ngOnInit(): void {
    this.historico = this.TranferenciaService.historico;
  }
}
