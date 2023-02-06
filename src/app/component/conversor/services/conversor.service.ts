import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Conversao } from '../../../conversor/conversor/models/conversao.model';
import { ConversaoFinal } from '../../../conversor/conversor/models/conversao-final.model';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { }

  converter(conversao: Conversao): Observable<ConversaoFinal>{
    const conversaoResposta = `https://api.exchangerate.host/convert?from=${conversao.from}&to=${conversao.to}&amount=${conversao.valor}`;

    return this.http.get<ConversaoFinal>(conversaoResposta);

  }
}

