import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup; // Este form busca é um controle de formulário controlado por uma classe do angular chamado FormGroup.

  constructor() { 

    this.formBusca = new FormGroup({ //Este form busca vai receber um novo formgroup, recebendo varios objetos, essa forma podemos utilizar ele onde for necessário na aplicação.
      somenteIda:  new FormControl(false) // Formulário de controle para o somente ida
    })
  }
}
