import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input('titulo')  titulo: string = 'Con Pazion abarca todos nuestros valores como fundamento.';
  @Input('subtitulo')  subtitulo: string = 'Con Pazion es la fusión de las frases "con paz" y "con pasión” que nos acompañas en todas nuestras acciones.';

  constructor() { }

  ngOnInit() {
  }

}
