import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HistoryComponent } from './pages/history/history.component';
import { SchollComponent } from './pages/scholl/scholl.component';
import { HomeComponent } from './pages/home/home.component';
import { InitComponent } from './pages/init/init.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';
import { PayComponent } from './pages/pay/pay.component';
import { UneteComponent } from './pages/unete/unete.component';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactanosComponent,
    FaqComponent,
    HistoryComponent,
    SchollComponent,
    HomeComponent,
    InitComponent,
    PaymentComponent,
    PayComponent,
    UneteComponent,
    VoluntariadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ContactanosComponent]
})
export class AppModule { }
