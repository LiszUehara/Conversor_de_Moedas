import { Injectable } from '@angular/core';
import { Moeda } from '../conversor/conversor/models/moeda.models'

import { HttpClient  } from '@angular/common/http';
import { map, Observable  } from 'rxjs';
import { ConversorComponent } from '../component/conversor/conversor.component';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  sigla: string;
  descricao: string;




  constructor(private http: HttpClient) {

    this.http.get<any>("https://api.exchangerate.host/symbols").subscribe((data: any) => {
      let elements: any[] = Object.values(data.symbols)
      elements.forEach(element => {
        element.code = this.sigla;
        element.description = this.descricao;

        console.log(element.code +'-'+element.description);
      });

});

  }


  getMoedas(): Observable<any>{
    const apiUrl = 'https://api.exchangerate.host/symbols';
    return this.http.get<any>(apiUrl);

}





}



