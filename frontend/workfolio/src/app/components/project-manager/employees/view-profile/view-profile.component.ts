import { Component } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  user = {
    name: 'John Doe',
    role: 'Web Developer',
    employeeId: 'TF-001',
    dateOfJoin: '7/7/12',
    location: 'Nairobi, Kenya',
    phone: '0123456789',
    email: 'john@example.com',
    address: '123 Coffee St, Nairobi',
    gender: 'Male',
    age: 35,
    nationality: 'Kenyan',
    bankInfo: {
      bankName: 'KCB Bank',
      accountNo: '01234my567hj',
      branch: 'Westlands',
      ifscCode: 'KCBL0123456'
    },
    emergencyContacts: [
      { relation: 'Wife', phoneNo: '0987654321' },
      { relation: 'Father', phoneNo: '0897654321' },
      { relation: 'Sister', phoneNo: '0976543210' }
    ],
    employmentDetails: {
      department: 'Technology',
      position: 'Senior Web Developer',
      workLocation: 'Nairobi Head Office',
      shift: 'Day',
      supervisor: 'Daniel Kitheka'
    }
  };
}
