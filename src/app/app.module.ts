import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ConversorModule } from './conversor/conversor.module';
import {MatSelectModule} from '@angular/material/select';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { ListarComponent } from './component/conversor/listar/listar.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ModalDeleteComponent } from './component/view/modal-delete/modal-delete.component';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ModalDeleteComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ConversorModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
