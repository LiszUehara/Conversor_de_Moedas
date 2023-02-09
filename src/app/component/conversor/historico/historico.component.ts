import { ModalDeleteComponent } from './../../view/modal-delete/modal-delete.component';
import { Conversao } from './../../../conversor/conversor/models/conversao.model';
import { TranferenciaService } from '../services/transferencia.service';
import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit, AfterViewInit {
  historico:any[];


  displayedColumns: string[] = ['Data', 'Origem', 'Destino', 'Valor', 'Saida', 'Taxa', 'Action', 'Dolar'];
  dataSource: MatTableDataSource<Conversao>;

  constructor(private TranferenciaService: TranferenciaService, public dialog: MatDialog){}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    this.historico = JSON.parse(sessionStorage.getItem("valorEmitir"))
    //this.TranferenciaService.historico;


    console.log(this.historico);


  }


  sortData(sort: Sort) {
    const data = this.historico.slice();
    if (!sort.active || sort.direction === '') {
      this.historico = data;
      return;
    }

    this.historico = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Origem':
          return this.compare(a.origem, b.origem, isAsc);
        case 'Destino':
          return this.compare(a.destino, b.destino, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  openDialog(historico): void {

    console.log("chamando o service");
    console.log(historico);
    this.TranferenciaService.deletar(historico);
    const dialogRef = this.dialog.open(ModalDeleteComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }



}
