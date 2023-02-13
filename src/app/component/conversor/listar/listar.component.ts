import { Moeda } from './../../../conversor/conversor/models/moeda.models';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoedaService } from '../services/moedas/moedas.service';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
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

  displayedColumns: string[] = ['sigla', 'descricao'];
  dataSource: MatTableDataSource<Moeda>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private moedaService: MoedaService
  ){
  }

  ngOnInit(): void{
    this.listarMoedas();
  }

  listarMoedas(){
    this.moedaService.getMoedas().subscribe((data: any) => {
      let elements: any[] = Object.values(data.symbols)
      elements.forEach(element => {
        let novaMoeda = new Moeda(element.code,element.description)
        this.listadeMoedas.push(novaMoeda);
        this.sigla = element.code;
        this.descricao = element.description
      });
      this.dataSource = new MatTableDataSource(this.listadeMoedas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
});
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


}
