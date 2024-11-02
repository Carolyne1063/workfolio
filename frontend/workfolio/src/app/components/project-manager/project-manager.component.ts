import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-project-manager',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DashboardComponent, ProjectsComponent,EmployeesComponent, SidebarComponent],
  templateUrl: './project-manager.component.html',
  styleUrl: './project-manager.component.css'
})
export class ProjectManagerComponent {
  selectedSection: string = 'dashboard';
  onSectionSelected(section: string){
    this.selectedSection = section;
  }
}
