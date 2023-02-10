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
      console.log(historico);
   }

   private adicionarData(transferencia: any){
    transferencia.data = new Date();
   }



    deletar(paraApagar: any){
      console.log("meuId",paraApagar.id);
      this.listarHistorico = this.historico.filter( busca => {
          return busca.id != paraApagar.id;

      });
      sessionStorage.setItem("valorEmitir", JSON.stringify(this.listarHistorico));

     }
   }




