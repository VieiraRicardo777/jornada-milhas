import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl;

//Contrutor criado para injetar http do tipo privado comunicando com o httpclient.
  constructor(
    private httpClient: HttpClient
  ) { }
//metodo para listar as promoções disponiveis na API do tipo observable onde retorna um Array[] contendo os itens
//fornecidos pela API

listar () : Observable<Promocao[]>{
//retorna Este.httpclient.pega<promocao[lista]>('endereço da requisição entre crazes e chaves com um $ no inicio para interpolação de string')/promocoes para concatenar
 return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`)
}

}
