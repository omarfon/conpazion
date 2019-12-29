import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  @Input('titulo')  titulo: string = '¡Donando podrás cambiar vidas! ';
  @Input('subtitulo')  subtitulo: string = ''; 
  constructor() { }

  ngOnInit() {
  }

}
