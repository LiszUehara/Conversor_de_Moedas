import { Conversao } from './../../../conversor/conversor/models/conversao.model';
import { TranferenciaService } from '../services/tranferencia.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit, AfterViewInit {
  historico:any[];

  displayedColumns: string[] = ['Data', 'Origem', 'Destino', 'Valor', 'Saida', 'Taxa'];
  dataSource: MatTableDataSource<Conversao>;

  constructor(private TranferenciaService: TranferenciaService){}

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
    this.historico = this.TranferenciaService.historico;
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
          return this.compare(a.origem, b.destino, isAsc);
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


}
