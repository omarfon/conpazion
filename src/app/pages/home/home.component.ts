import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
/* declare var paypal; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* @ViewChild('paypal', {static:true}) paypalElement: ElementRef;   */
  planId: any;  
  subcripId: any;  
/*   basicAuth = 'Basic QWNWUTBIX05QTVlWMDIzSDhMM3Y2alhNcDRVdaUN2V0M4Mmo4a19hodjdkdS14M3F4dFJ6Y2pNTnRPcGN6OUpPdjU1TW9jTllsEV1p5WURWNm46RUZJRWtJd0dYdDFJSTdFRmlEdVQ3UWExV2ZXWDZnYmw3Z2w5ajgwZVlsVjI1ODdfUTRHSUxCSWxZfOGg1SzRRZTFhMZU1yVgFZGRThIWXAyRjA=';
 */
  @Input() titulo: string = 'Titulo para la pantalla Inicial del Home';
  @Input() subtitulo: string = 'texto de relleno  para la pantalla Inicial Home';

  constructor() { }

  ngOnInit() {
      this.titulo = "Titulo del Home";
      this.subtitulo = "Subtitulo del Home";
   /*    const self = this;  
    this.planId = 'sb-1xmgb491186@business.example.com';  //Default Plan Id
    paypal.Buttons({  
      createSubscription: function (data, actions) {  
        return actions.subscription.create({  
          'plan_id': self.planId,  
        });  
      },  
      onApprove: function (data, actions) {  
        console.log(data);  
        alert('You have successfully created subscription ' + data.subscriptionID);  
        self.getSubcriptionDetails(data.subscriptionID);  
      },  
      onCancel: function (data) {  
        // Show a cancel page, or return to cart  
        console.log(data);  
      },  
      onError: function (err) {  
        // Show an error page here, when an error occurs  
        console.log(err);  
      }  
  
    }).render(this.paypalElement.nativeElement); */  
  }

  // ============Start Get Subcription Details Method============================  
  /* getSubcriptionDetails(subcriptionId) {  
    const xhttp = new XMLHttpRequest();  
    xhttp.onreadystatechange = function () {  
      if (this.readyState === 4 && this.status === 200) {  
        console.log(JSON.parse(this.responseText));  
        alert(JSON.stringify(this.responseText));  
      }  
    };  
    xhttp.open('GET', 'https://api.sandbox.paypal.com/v1/billing/subscriptions/' + subcriptionId, true);  
    xhttp.setRequestHeader('Authorization', this.basicAuth);  
  
    xhttp.send();  
  }   */
  // ============END Get Subcription Details Method========================

}
