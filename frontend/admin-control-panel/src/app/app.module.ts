import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {FormsModule} from '@angular/forms';
import {CustomersComponent} from './customers/customers.component';
import {CustomersService} from './customers.service';
import {HttpClientModule} from '@angular/common/http';
import {LessonsComponent} from './lessons/lessons.component';
import {LessonService} from './lesson.service';
import { RegistrationsComponent } from './registrations/registrations.component';
import {RegistrationService} from './registration.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    LessonsComponent,
    RegistrationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomersService, LessonService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
