import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNoClick(){

  }
  goToMessage(){
    console.log('enviar mensaje')
  }

}
