import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() titulo: string = 'Preguntas frecuentes'; 
 /*  public titulo : string = "titulo para la pantalla del faq"; */
  
 
  constructor() { }

  ngOnInit() {
  }

}
