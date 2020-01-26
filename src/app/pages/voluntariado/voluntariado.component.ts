import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-voluntariado',
  templateUrl: './voluntariado.component.html',
  styleUrls: ['./voluntariado.component.scss']
})
export class VoluntariadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactForm(form: NgForm){
    console.log('form:',form.value);
    /* let formu = {
      nombre:'omar',
      apellido:'fonseca',
      email:'magentadin@gmail.com',
      mensaje:'mensaje'
    } */
      /* swal("Formulario de contacto", "Mensaje enviado correctamente", 'succes'); */
      console.log('vuelta data:');
  }

}
