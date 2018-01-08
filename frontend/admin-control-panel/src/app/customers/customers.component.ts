import {Component, OnInit} from '@angular/core';
import {CustomersService} from '../customers.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private customersService: CustomersService) {
  }
  getCustomers(): void {
    this.customersService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }
  add(name): void {
    this.customersService.add({ name } as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }
  ngOnInit() {
    this.getCustomers();
  }

}
