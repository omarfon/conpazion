import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { ContactanosComponent } from '../contactanos/contactanos.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public activeLang = 'es';

  @Input('titulo')  titulo: string = 'Por un futuro mejor, juntos';
  @Input('subtitulo')  subtitulo: string = 'Los niños en áreas empobrecidas del Perú carecen de las herramientas y la educación para escapar del ciclo de la pobreza.';
  @Input ('header') header: string = "../../../assets/imgs/home/portadaHome.png";
  navbar: any;
  constructor( public dialog: MatDialog,
               private translate: TranslateService) { 
                this.translate.setDefaultLang(this.activeLang);
               }

  ngOnInit() {
  }

  openContact(): void{
    console.log('abrir pop up con contactanos');
    const dialogConfig = new MatDialogConfig();
    /* dialogConfig.disableClose = true; */
    dialogConfig.autoFocus = true;
    /* dialogConfig.width = "60%"; */
   this.dialog.open(ContactanosComponent, dialogConfig);
}

close(){
  console.log('cerrar ventana');
  
}

cambiarLenguaje(lang){
  this.activeLang = lang;
  this.translate.use(lang);
  console.log(lang);
}

}
