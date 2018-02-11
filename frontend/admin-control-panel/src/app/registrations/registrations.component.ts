import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {Registration} from '../registration';

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
    const registration = new Registration();
    registration.customerId = customerId;
    registration.lessonId = lessonId;
    this.registrationService.add(registration)
      .subscribe(regs => {
        this.registrations.push(regs);
      });
  }
  delete(registration: Registration): void {
    this.registrations = this.registrations.filter(c => c !== registration);
    this.registrationService.delete(registration).subscribe();
  }
  ngOnInit() {
    this.getRegistrations();
  }

}
