import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assign-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assign-project.component.html',
  styleUrl: './assign-project.component.css'
})
export class AssignProjectComponent {
  selectedEmployee: string = '';
  selectedProject: string = '';
  projectDeadline: string = '';
  projectDescription: string = '';
  
  employees = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
  ];
  
  projects = [
    { id: '101', title: 'Project Alpha' },
    { id: '102', title: 'Project Beta' },
    { id: '103', title: 'Project Gamma' },
  ];

  assignProject() {
    // Handle the project assignment logic here
    console.log('Project assigned:', {
      employeeId: this.selectedEmployee,
      projectId: this.selectedProject,
      deadline: this.projectDeadline,
      description: this.projectDescription,
    });
    // You can also reset the form or show a success message here
  }
}
