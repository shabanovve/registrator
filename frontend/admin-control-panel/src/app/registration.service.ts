import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {Registration} from './registration';
import {BaseService} from './baseService';

@Injectable()
export class RegistrationService extends BaseService {
  private registrationUrl = 'api/registrations';
  constructor(private http: HttpClient) {
    super();
  }
  getRegistrations(): Observable<Registration[]> {
    return this.http.get<Registration[]>(this.registrationUrl)
      .pipe(
        catchError(this.handleError('getRegistrations', []))
      );
  }
  add(registration: Registration): Observable<Registration> {
    return this.http.post<Registration>(this.registrationUrl + '/add', registration, this.getHttpOptions()).pipe(
      catchError(this.handleError<Registration>('add'))
    );

  }
  delete(registration: Registration): Observable<String> {
    const url = `${this.registrationUrl}/${registration.id}`;
    return this.http.delete<String>(url, this.getHttpOptions()).pipe(
      catchError(this.handleError<String>('delete'))
    );
  }

}
