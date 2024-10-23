import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' /* O Singleton é um design pattern que visa garantir que apenas uma única instância de uma determinada classe 
  exista em todo o sistema. Ele é útil quando é necessário controlar e restringir o número de instâncias de uma classe 
  específica, garantindo que todos os componentes que dependem dela acessem a mesma instância compartilhada. */
})
export class PromocaoService {
// Implementação do serviço
  private apiUrl: string = environment.apiUrl; /*atribudo que diz que a url é uma string, sendo nomeada de apiUrl da mesma forma que foi criada no arquivo enviroment
  para, deve ser apontado a URL raiz do projeto o enviroment de produção e não o de desenvolvimento para quando ocorrer a virada de ambiente*/ 


  /* contrutor para injetar o HTTP Client com nivel de acessibilidade após os dois pontos significa a tipagem do que eu quero injetar no httpclient podendo ser qualquer nome*/
  constructor(
    private httpClient: HttpClient
  ) { }


/* Método para listar as promoções disponiveis na API */   
  listar () : Observable<Promocao[]> { /*array que recebe a lista de promoções da API */
    return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`) /* efetuar o get in this no endpoint de promoção, e adicionar entre crazes para que efetua a concatenação
    dos dados, o sinal de $ serve para interpolar os dados */ 
  }
}
