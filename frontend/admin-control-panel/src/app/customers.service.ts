import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {BaseService} from './baseService';

@Injectable()
export class CustomersService extends BaseService {
  private customersUrl = 'api/customers';  // URL to web api
  constructor(private http: HttpClient) {
    super();
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        catchError(this.handleError('getCustomers', []))
      );
  }

  add(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl + '/add', customer, this.getHttpOptions()).pipe(
      catchError(this.handleError<Customer>('add'))
    );

  }

  delete(customer: Customer): Observable<String> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http.delete<String>(url, this.getHttpOptions()).pipe(
      catchError(this.handleError<String>('delete'))
    );
  }

}
