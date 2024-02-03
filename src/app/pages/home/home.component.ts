import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor ( private servicoPromocao : PromocaoService){

  }
  ngOnInit(): void {
    this.servicoPromocao.listar()//metodo listar utiliza o subscribe para se inscrever no metodo.
    .subscribe(
      resposta => 
      {
        console.log(resposta) //após se inscrever ele recebe a resposta dentro de console log

      }
    )
    
  }

}
