import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConversaoFinal } from 'src/app/conversor/conversor/models/conversao-final.model';
import { Conversao } from 'src/app/conversor/conversor/models/conversao.model';
import { TranferenciaService } from '../../conversor/services/transferir-dados/transferencia.service';

@Component({
  selector: 'app-modal-resposta',
  templateUrl: './modal-resposta.component.html',
  styleUrls: ['./modal-resposta.component.css']
})
export class ModalRespostaComponent implements OnInit{
  conversao: Conversao;
  conversaoFinal: ConversaoFinal;

  resultados: any;

  constructor(
    public dialogRef: MatDialogRef<ModalRespostaComponent>,
    private TranferenciaService: TranferenciaService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cancelar(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.resultados = this.TranferenciaService.historico;

  }


}
