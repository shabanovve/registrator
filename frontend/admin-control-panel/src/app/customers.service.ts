import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CustomersService {

  constructor() {
  }

  getCustomers(): Observable<Customer[]> {
    return of(Customer[1]);
  }
}
