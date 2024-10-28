import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, ViewProfileComponent, ViewProjectsComponent, AssignProjectComponent],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],  // Corrected styleUrl to styleUrls
})
export class EmployeesComponent {
  showForm = false; // Initially hidden
  selectedSection: string | undefined;  // Holds the currently selected section

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

  onSelectSection(section: string) {
    this.selectedSection = section;  // Set the selected section
  }
}
