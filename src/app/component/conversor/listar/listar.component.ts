import { Moeda } from './../../../conversor/conversor/models/moeda.models';
import { Component, OnInit } from '@angular/core';
import { MoedaService } from 'src/app/component/conversor/services/moedas.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  sigla: Moeda[];
  descricao: Moeda[];
  moedas2: Moeda[] = [new Moeda("a","b")]
  listadeMoedas: Moeda[] = [];
  moedas: any[] = [];

  displayedColumns: string[] = ['Sigla', 'Descricao'];
  dataSource: MatTableDataSource<Moeda>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private moedaService: MoedaService
  ){

  }

  ngOnInit(): void{
    this.listarMoedas();
    console.log(this.listadeMoedas)
  }

  listarMoedas(){
    this.moedaService.getMoedas().subscribe((data: any) => {
      let elements: any[] = Object.values(data.symbols)
      elements.forEach(element => {
        let novaMoeda = new Moeda(element.code,element.description)
        this.listadeMoedas.push(novaMoeda);
        this.sigla = element.code;
        this.descricao = element.description
        //console.log(this.sigla + '-' + this.descricao);
        
        this.dataSource = new MatTableDataSource(this.listadeMoedas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
});
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

sortData(sort: Sort) {
  const data = this.listadeMoedas.slice();
  if (!sort.active || sort.direction === '') {
    this.listadeMoedas = data;
    return;
  }

  this.listadeMoedas = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'sigla':
        return this.compare(a.sigla, b.sigla, isAsc);
      case 'descricao':
        return this.compare(a.descricao, b.descricao, isAsc);
      default:
        return 0;
    }
  });
}

compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

}





