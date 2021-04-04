import { Component } from '@angular/core';
import { MemoServiceService } from './services/memo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memotest';

  estado = [];
  distribucion_cartas = []

  constructor(private memo: MemoServiceService){
    this.distribucion_cartas = this.memo.getRandomDistribution();
  }

  muestraAlerta(numImage) {
    window.alert(numImage);
  }

  actualizaEstado(numImage) {
    if (this.estado.length == 2) {
      this.estado = [];
    } else {
      // Truco del almendruco. Debido a que angular en el evento onChanges
      // no detecta cambios que se produzcan en un array (añadir o quitar elementos),
      // hay que reasignar el array completo.
      // Por eso se crea una copia temporal del array de estados y se
      // reasigna.
      let _estado = JSON.parse(JSON.stringify(this.estado))
      this.estado = _estado
    }

    this.estado.push(numImage);
  }
}