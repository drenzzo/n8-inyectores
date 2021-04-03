import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memotest';

  estado = [];
  num_imagenes = 7;
  ditribucion_cartas = []

  constructor(){
    this.ditribucion_cartas = this.getRandomDistribution();
  }

  muestraAlerta(numImage) {
    window.alert(numImage);
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomDistribution(): number[] {
    let orderedList = []
    for (let i = 0; i < this.num_imagenes; i++) {
      orderedList.push(i)
      orderedList.push(i)
    }
    console.log(orderedList)
    let unorderedList = []
    let iter = 2 * this.num_imagenes
    let _iter = iter
    for (let i = 0; i < iter; i++) {
      let index = this.randomIntFromInterval(0, _iter - 1)
      unorderedList.push(orderedList[index])
      _iter--
      orderedList.splice(index, 1);
    }
    return unorderedList
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