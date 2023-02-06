import { Injectable } from '@angular/core';

import { HttpClient  } from '@angular/common/http';
import { map, Observable  } from 'rxjs';
import { Moeda } from '../../../conversor/conversor/models/moeda.models';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {


  constructor(private http: HttpClient) {}


  getMoedas(): Observable<any>{
    const apiUrl = 'https://api.exchangerate.host/symbols';
    return this.http.get<any>(apiUrl);

}


}



