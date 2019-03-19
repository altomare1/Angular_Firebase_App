import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';
@Component({
  selector: 'cof-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  coffeeOrder = [];
  coffees: string[] = ['Americano', 'Flat White', 'Cappuccino', 'Latte', 'Espresso', 'Machiato', 'Mocha', 'Hot Chocolate', 'Tea'];

  ngOnInit() {
  }

  addCoffee = (coffee: any) => this.coffeeOrder.push(coffee);

  removeCoffee = (coffee: any) => {
      const index = this.coffeeOrder.indexOf(coffee);
      if (index > -1) {
        this.coffeeOrder.splice(index, 1);
      }
  }

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    const data = this.ordersService.form.value;
    this.ordersService.createCoffeeOrder(data)
         .then(res => {
             /*Vocês podem fazer alguma coisa aqui como limpar o form, ou dar mensagem de sucesso*/
         });
  }
}
