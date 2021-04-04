import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemoServiceService } from '../services/memo-service.service';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  // La imagen que se muestra
  @Input('numImage') numImage: number;
  @Input('estado') estado: number[];
  @Output('onChangeState') onChangeState = new EventEmitter<number>()
  resolved = false;
  urlImage: string;
  // La imagen de atrás, común a todas las "cartas"
  urlImageBack = "https://image.freepik.com/vector-gratis/confeti-dorado-diseno-festivo_53876-67683.jpg";

  constructor(private memo: MemoServiceService) {
  }

  ngOnInit() {
    this.urlImage = this.urlImageBack;
  }
  ngOnChanges() {
    console.log(this.estado);
    if(this.resolved) return;

    if (this.estado.length == 2){
      if(this.estado[0] == this.estado[1] && this.estado[0] == this.numImage){
        this.resolved = true;
      }else if(this.estado[0] != this.estado[1] && (this.numImage == this.estado[0] || this.numImage == this.estado[1]) ){
        setTimeout(() => {
          this.urlImage = this.urlImageBack;
        }, 500);
      }
    }
  }
  flip() {
    // Cuando el usuario pica en la carta hay que darle la vuelta, es decir,
    // mostrar la imagen que le corresponde al índice `n`
    this.urlImage = this.memo.getImage(this.numImage);
    this.onChangeState.emit(this.numImage);
  }

}
