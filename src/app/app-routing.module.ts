import { HistoricoComponent } from './component/conversor/historico/historico.component';
import { ListarComponent } from './component/conversor/listar/listar.component';
import { ConversorComponent } from './component/conversor/conversor/conversor.component';
import { HomeComponent } from './component/view/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'conversor',
    component: ConversorComponent
  },

  {
    path: 'listarMoedas',
    component: ListarComponent
  },

  {
    path: 'historico',
    component: HistoricoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
