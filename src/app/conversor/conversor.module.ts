import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../component/view/home/home.component';
import { HeaderComponent } from '../component/view/header/header.component';
import { HistoricoComponent } from '../component/view/historico/historico.component';
import { FooterComponent } from '../component/view/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HistoricoComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    HistoricoComponent,
    FooterComponent,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ConversorModule { }
