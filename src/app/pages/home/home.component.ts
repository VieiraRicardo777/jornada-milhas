import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { /* significa que esta classe implementa o componente para o OnInit */
  constructor( private servicoPromocao: PromocaoService ) { /* Construtor para o serviço de promoção serviçe */

  }
  ngOnInit(): void {
    this.servicoPromocao.listar() /* método listar do serviço promoção */
      .subscribe( /* efetua a subinscrição no método observable */
        resposta => { /* Quando os dados estiverem prontos */
          console.log(resposta)  /* Ele da a resposta dos dados e exibe no console log */
        }
      )
  }
}
