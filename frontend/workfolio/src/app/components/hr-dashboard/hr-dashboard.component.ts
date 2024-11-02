import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeadersComponent } from './leaders/leaders.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, LeaveManagementComponent, EmployeesComponent, LeadersComponent, AttendanceComponent, DashboardComponent],
  templateUrl: './hr-dashboard.component.html',
  styleUrl: './hr-dashboard.component.css'
})
export class HrDashboardComponent {
  selectedSection: string = 'dashboard';
  onSectionSelected(section: string){
    this.selectedSection = section;
  }
}

