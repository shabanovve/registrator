import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomersService {
  private heroesUrl = 'api/customers';  // URL to web api
  constructor(private http: HttpClient) {
  }
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getCustomers', []))
      );
  }

  add(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.heroesUrl + '/add', customer, httpOptions).pipe(
      catchError(this.handleError<Customer>('add'))
    );

  }
  delete (customer: Customer): Observable<String> {
    const url = `${this.heroesUrl}/${customer.id}`;
    return this.http.delete<String>(url, httpOptions).pipe(
      catchError(this.handleError<String>('delete'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
