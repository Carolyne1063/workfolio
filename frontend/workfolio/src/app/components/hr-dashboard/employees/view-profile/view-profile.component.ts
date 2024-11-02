import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  // User details
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

  
  isEditing: Record<string, boolean> = {
    basicInfo: false,
    bankInfo: false,
    emergencyContacts: false,
    employmentDetails: false
  };
  employeeId: any;

  toggleEdit(section: keyof typeof this.isEditing) {
    this.isEditing[section] = !this.isEditing[section];
  }

  saveChanges() {
   
    console.log('User details saved:', this.user);
   
    Object.keys(this.isEditing).forEach((key) => {
      this.isEditing[key as keyof typeof this.isEditing] = false;
    });
  }

  anyEditing(): boolean {
    return Object.values(this.isEditing).some(editing => editing);
  }
   // Dropdown options for organizations and statuses
   organizations: string[] = ['Finance', 'Marketing', 'IT', 'Human Resources', 'Operations'];
   statuses: string[] = ['Active', 'Inactive', 'Terminated'];
 
   // Selected values for organization and status
   selectedOrganization: string = '';
   employeeStatus: string = '';
 
   // Method to assign the selected organization to the employee
   assignOrganization() {
     const organizationDetails = {
       employeeId: this.employeeId,
       organization: this.selectedOrganization
     };
 
     // Simulate a save operation (could be an API call)
     console.log('Assigning organization:', organizationDetails);
 
     // Optional: Add code to send organizationDetails to a backend API
     alert(`Organization assigned: ${this.selectedOrganization}`);
   }
 
   // Method to update the employee's status
   updateStatus() {
     const statusDetails = {
       employeeId: this.employeeId,
       status: this.employeeStatus
     };
 
     // Simulate a save operation (could be an API call)
     console.log('Updating status:', statusDetails);
 
     // Optional: Add code to send statusDetails to a backend API
     alert(`Status updated to: ${this.employeeStatus}`);
   }
}
