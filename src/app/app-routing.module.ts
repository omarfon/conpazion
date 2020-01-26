import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { SchollComponent } from './pages/scholl/scholl.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PayComponent } from './pages/pay/pay.component';
import { UneteComponent } from './pages/unete/unete.component';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path:'history', component:HistoryComponent},
  {path:'scholl', component:SchollComponent},
  {path:'faq', component:FaqComponent},
  {path:'pay', component:PayComponent},
  {path:'unete', component:UneteComponent},
  {path:'voluntariado', component:VoluntariadoComponent},
  {path:'contact', component:ContactanosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
