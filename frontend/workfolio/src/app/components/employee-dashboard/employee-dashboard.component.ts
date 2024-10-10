import { Component } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyLeavesComponent } from './my-leaves/my-leaves.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, MyProjectsComponent, MyLeavesComponent, DashboardComponent, AttendanceComponent],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {
  selectedSection: string = 'dashboard';
  onSectionSelected(section: string){
    this.selectedSection = section;
  }
}
