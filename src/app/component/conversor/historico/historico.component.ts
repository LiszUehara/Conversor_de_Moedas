import { ModalDeleteComponent } from './../../view/modal-delete/modal-delete.component';
import { Conversao } from './../../../conversor/conversor/models/conversao.model';
import { TranferenciaService } from '../../conversor/services/transferir-dados/transferencia.service';
import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit, AfterViewInit {
  historico:any[] =[];


  displayedColumns: string[] = ['data', 'origem', 'destino', 'valor', 'saida', 'taxa', 'action', 'icon'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private TranferenciaService: TranferenciaService,
    public dialog: MatDialog
    ){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnInit(): void {
    //this.listarHistorico();
    //this.TranferenciaService.historico;
    this.listarHistorico();
  }

  private listarHistorico() {
    this.historico = JSON.parse(sessionStorage.getItem("valorEmitir"));

    this.dataSource = new MatTableDataSource(this.historico);
  }

  deletar(historico): void {

    this.TranferenciaService.deletar(historico.id);
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      data: {historico}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.historico = JSON.parse(sessionStorage.getItem("valorEmitir"))
      this.dataSource.data = [...this.historico]
    });
  }



}
