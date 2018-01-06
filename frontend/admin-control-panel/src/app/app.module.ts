import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {FormsModule} from '@angular/forms';
import {CustomersComponent} from './customers/customers.component';
import {CustomersService} from './customers.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
