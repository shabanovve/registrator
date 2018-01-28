import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Lesson} from './lesson';
import {BaseService} from './baseService';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LessonService extends BaseService {
  private lessonUrl = 'api/lessons';

  constructor(private http: HttpClient) {
    super();
  }

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonUrl)
      .pipe(
        catchError(this.handleError('getLessons', []))
      );
  }

  add(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.lessonUrl + '/add', lesson, this.getHttpOptions()).pipe(
      catchError(this.handleError<Lesson>('add'))
    );

  }
  delete(lesson: Lesson): Observable<String> {
    const url = `${this.lessonUrl}/${lesson.id}`;
    return this.http.delete<String>(url, this.getHttpOptions()).pipe(
      catchError(this.handleError<String>('delete'))
    );
  }
}
