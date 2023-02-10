import { TranferenciaService } from '../../conversor/services/transferir-dados/transferencia.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {

  historico:any[];


  constructor(
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    private TranferenciaService: TranferenciaService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}




  ngOnInit(){

  }

  onNoClick(): void {
    this.dialogRef.close();
    this.historico = this.TranferenciaService.historico;
  }


  deletar(): void{
    this.TranferenciaService.deletar(this.data.historico);
    this.dialogRef.close();
  }
}




