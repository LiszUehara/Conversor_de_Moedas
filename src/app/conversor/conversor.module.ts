import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../component/view/home/home.component';
import { HeaderComponent } from '../component/view/header/header.component';
import { HistoricoComponent } from '../component/view/historico/historico.component';
import { FooterComponent } from '../component/view/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ConversorComponent } from '../component/conversor/conversor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HistoricoComponent,
    FooterComponent,
    ConversorComponent

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule

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
