import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'cof-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  coffeeOrders: any;

  ngOnInit() {
    this.getCoffeeOrders();
  }

  getCoffeeOrders = () => this.ordersService.getCoffeeOrders().subscribe(res => (this.coffeeOrders = res));

  deleteOrder = (data: any) => this.ordersService.deleteCoffeeOrder(data);

  markCompleted = (data: any) => this.ordersService.updateCoffeeOrder(data);
}
