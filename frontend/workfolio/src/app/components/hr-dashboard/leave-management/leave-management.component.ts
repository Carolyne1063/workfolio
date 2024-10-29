import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-leave-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.css'
})
export class LeaveManagementComponent {
  leaves = [
    {
      employeeName: 'John Doe',
      leaveType: 'Medical Leave',
      from: new Date(2024, 7, 26),
      to: new Date(2024, 8, 1),
      noOfDays: 7,
      reason: 'Sick',
      status: 'Approved'
    },
    {
      employeeName: 'Jane Doe',
      leaveType: 'Medical Leave',
      from: new Date(2024, 7, 26),
      to: new Date(2024, 8, 1),
      noOfDays: 7,
      reason: 'Sick',
      status: 'Declined'
    },
    {
      employeeName: 'Sarah Smith',
      leaveType: 'Medical Leave',
      from: new Date(2024, 7, 26),
      to: new Date(2024, 8, 1),
      noOfDays: 7,
      reason: 'Sick',
      status: 'Pending'
    }
  ];
}
