import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {LessonsComponent} from './lessons/lessons.component';
import {RegistrationsComponent} from './registrations/registrations.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'lessons', component: LessonsComponent},
  { path: 'registrations', component: RegistrationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
