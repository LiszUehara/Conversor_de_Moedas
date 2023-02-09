import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {

  private listarHistorico: any[];

  constructor() {
    this.listarHistorico = JSON.parse(sessionStorage.getItem("valorEmitir") || "[]");
   }

   get historico(){
    return this.listarHistorico;
   }

   adicionar(historico: any){
    this.adicionarData(historico);
      this.listarHistorico.push(historico);
      sessionStorage.setItem("valorEmitir", JSON.stringify(this.listarHistorico));
      console.log(this.historico);
    console.log(historico.id);
   }

   private adicionarData(transferencia: any){
    transferencia.data = new Date();
   }

   recuperar(){
    return this.listarHistorico.lastIndexOf(this.historico);
   }

   deletar(historico: any){
    let lista: any[] = JSON.parse(sessionStorage.getItem("valorEmitir") || "[]");
    lista = lista.filter( busca => {
        return busca.id != historico.id;
    });
    sessionStorage.setItem("valorEmitir", JSON.stringify(lista));


   console.log(this.historico);
   console.log(historico.id);

      console.log("chamando service de deleter");

   }

}
