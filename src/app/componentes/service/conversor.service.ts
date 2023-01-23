import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly API = "https://exchangerate.host/";
  constructor( private http: HttpClient) { }

  listar(){
    return this.http.get(this.API);
  }
}

