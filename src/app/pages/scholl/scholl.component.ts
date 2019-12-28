import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scholl',
  templateUrl: './scholl.component.html',
  styleUrls: ['./scholl.component.scss']
})
export class SchollComponent implements OnInit {
  @Input('titulo')  titulo: string = '¡Con Pazion abrirán su primera escuela en el 2020! ';
  @Input('subtitulo')  subtitulo: string = 'hasta entonces estaremos ejecutando un proyecto piloto para medir y monitorear el impacto de nuestras enseñanzas y metodología.';

  constructor() { }

  ngOnInit() {
  }

}
