import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule, ViewProfileComponent, ViewProjectsComponent, AssignProjectComponent],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  showForm = false; 
  selectedSection: string | undefined;
  visibleOptions: number | null = null;

  // Search filters
  searchName = '';
  searchId = '';
  searchDesignation = '';

  // Employee Data
  employees = [
    { id: 1, image: 'assets/p1.jpg', firstName: 'Alice', lastName: 'Johnson', position: 'Web Developer' },
    { id: 2, image: 'assets/p2.jpg', firstName: 'Bob', lastName: 'Smith', position: 'UI/UX Designer' },
    { id: 3, image: 'assets/p3.jpg', firstName: 'Carol', lastName: 'Lee', position: 'Mobile Developer' },
    { id: 4, image: 'assets/p4.jpg', firstName: 'David', lastName: 'Kim', position: 'Web Designer' },
    { id: 5, image: 'assets/p5.jpg', firstName: 'Emma', lastName: 'Brown', position: 'QA Expert' },
    { id: 6, image: 'assets/p6.jpg', firstName: 'Frank', lastName: 'Moore', position: 'Networking Master' },
  ];

  // New Employee Data
  newEmployee = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfJoin: '',
    position: ''
  };

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
      this.visibleOptions = null;
    }
  }

  onSelectSection(section: string) {
    this.selectedSection = section;
  }

  goBack() {
    this.selectedSection = undefined;
  }


  addEmployee() {
    // Logic to add the new employee
    const newEmployee = { ...this.newEmployee, id: this.employees.length + 1, image: 'assets/default.jpg' };
    this.employees.push(newEmployee);

    // Reset form and close overlay
    this.newEmployee = { firstName: '', lastName: '', email: '', phoneNumber: '', dateOfJoin: '', position: '' };
    this.showForm = false;
  }

  searchEmployees() {
    // Implement filtering logic here
    console.log('Searching for:', this.searchName, this.searchId, this.searchDesignation);
    // You can add logic to filter employees based on `searchName`, `searchId`, and `searchDesignation`.
  }
}
