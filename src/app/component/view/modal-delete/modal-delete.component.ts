import { TranferenciaService } from '../../conversor/services/transferencia.service';
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {

  historico:any[];


  constructor(
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    private TranferenciaService: TranferenciaService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.historico = this.TranferenciaService.historico;
  }


  deletar(historico): void{
    this.TranferenciaService.deletar(historico);
  }
}




