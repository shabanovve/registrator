import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {FormsModule} from '@angular/forms';
import {CustomersComponent} from './customers/customers.component';
import {CustomersService} from './customers.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {LessonsComponent} from './lessons/lessons.component';
import {LessonService} from './lesson.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        delay: 1,
        dataEncapsulation: false
      }
    )
  ],
  providers: [CustomersService, LessonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
