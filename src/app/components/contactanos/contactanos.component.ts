import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import * as swal from 'sweetalert2';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {

  constructor( public _MessageService: MessageService) { }

  ngOnInit() {
  }

  onNoClick(){

  }
  /* goToMessage(){
    console.log('enviar mensaje')
  } */

  contactForm(form: NgForm){
    console.log('form:',form.value);
    let formu = {
      nombre:'omar',
      apellido:'fonseca',
      email:'magentadin@gmail.com',
      mensaje:'mensaje'
    }
    console.log(formu);
    this._MessageService.sendMessage(formu).subscribe((data)=>{
      /* swal("Formulario de contacto", "Mensaje enviado correctamente", 'succes'); */
      console.log('vuelta data:',data);
    });
  }

}
