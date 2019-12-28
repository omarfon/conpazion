import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paypal', {static:true}) paypalElement: ElementRef;
  product = {
    price: 777.77,
    description: "donación conpazion"
  };

  paidFor = false

  constructor() { }

  ngOnInit() {
     paypal
          .Buttons({
            createOrder: (data, actions)=>{
                return actions.order.create({
                  purchase_units:[
                    {
                      description: this.product.description,
                      amount:{
                        currency_code: 'USD',
                        value: this.product.price
                    }
                    }
                  ]
                });
            },
            opApprove: async (data, actions)=>{
                const order = await actions.order.capture();
                this.paidFor = true;
                console.log(order);
            },
            onError: err =>{
              console.log(err)
            }
          })
          .render(this.paypalElement.nativeElement);
  }

}
