import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  showForm = false; // Initially hidden

  employees = [
    { id: 1, image: 'assets/p1.jpg', position: 'Web Developer' },
    { id: 2, image: 'assets/p2.jpg', position: 'UI/UX Designer' },
    { id: 3, image: 'assets/p3.jpg', position: 'Mobile Developer' },
    { id: 4, image: 'assets/p4.jpg', position: 'Web Designer' },
    { id: 5, image: 'assets/p5.jpg', position: 'QA Expert' },
    { id: 6, image: 'assets/p6.jpg', position: 'Networking Master' },
  ];
  private visibleOptions: number | null = null;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  toggleOptions(employeeId: number) {
    this.visibleOptions = this.visibleOptions === employeeId ? null : employeeId;
  }

  isOptionsVisible(employeeId: number): boolean {
    return this.visibleOptions === employeeId;
  }
   // Close dropdown when clicking outside
   @HostListener('document:click', ['$event'])
   onClick(event: MouseEvent) {
     const target = event.target as HTMLElement;
     if (!target.closest('.moreDetails')) {
       this.visibleOptions = null; // Close dropdown
     }
   }

  viewProfile(employeeId: number) {
    console.log('View Profile for employee ID:', employeeId);
    // Add your logic to view the profile here
  }

  assignProject(employeeId: number) {
    console.log('Assign Project for employee ID:', employeeId);
    // Add your logic to assign a project here
  }

  viewProjects(employeeId: number) {
    console.log('View Projects for employee ID:', employeeId);
    // Add your logic to view projects here
  }
}
