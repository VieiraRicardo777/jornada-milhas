import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private service: PromocaoService) {
  }
  ngOnInit(): void {
    this.service.listar().subscribe( /* método listar do serviço promoção efetua a subinscrição no método observable */
      res => { /* Quando os dados estiverem prontos */
        this.promocoes = res; /* Ele insere a resposta no método this.promocoes */
      }
    )
  }
}
