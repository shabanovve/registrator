import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {Registration} from '../registration';
import {Customer} from '../customer';
import {Lesson} from '../lesson';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {

  registrations: Registration[];
  constructor(private registrationService: RegistrationService) {
  }
  getRegistrations(): void {
    this.registrationService.getRegistrations()
      .subscribe(registrations => this.registrations = registrations);
  }
  add(customerId, lessonId): void {
    const registration = this.createRegistration(customerId, lessonId);
    this.registrationService.add(registration)
      .subscribe(regs => {
        this.registrations.push(regs);
      });
  }

  private createRegistration(customerId, lessonId): Registration {
    const registration = new Registration();
    registration.customer = this.createCustomer(customerId);
    registration.lesson = this.createLesson(lessonId);
    return registration;
  }

  private createLesson(lessonId): Lesson {
    const lesson = new Lesson();
    lesson.id = lessonId;
    return lesson;
  }

  private createCustomer(customerId): Customer {
    const customer = new Customer();
    customer.id = customerId;
    return customer;
  }

  delete(registration: Registration): void {
    this.registrations = this.registrations.filter(c => c !== registration);
    this.registrationService.delete(registration).subscribe();
  }
  ngOnInit() {
    this.getRegistrations();
  }

}
