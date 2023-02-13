import { ConversorModule } from './../../../conversor/conversor.module';
import { MoedaService } from './../services/moedas/moedas.service';
import { ConversorService } from './../services/conversao/conversor.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponent } from './listar.component';
import { TranferenciaService } from '../services/transferir-dados/transferencia.service';

describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComponent ],
      imports: [ConversorModule]


    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  
});
