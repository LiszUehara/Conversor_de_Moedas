import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../component/view/home/home.component';
import { HeaderComponent } from '../component/view/header/header.component';

import { HistoricoComponent } from '../component/conversor/historico/historico.component';
import { FooterComponent } from '../component/view/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ConversorComponent } from '../component/conversor/conversor.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MoedaService } from './moedas.service';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HistoricoComponent,
    FooterComponent,
    ConversorComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule

  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    HistoricoComponent,
    FooterComponent,
    ConversorComponent,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class ConversorModule { }
