import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.scss']
})
export class UneteComponent implements OnInit {
  @Input('titulo')  titulo: string = '¡Unete! ';
   @Input('subtitulo')  subtitulo: string = 'Podrás ayudar a cambiar vidas'; 

  constructor() { }

  ngOnInit() {
  }

}
