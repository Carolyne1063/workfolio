import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectForm: FormGroup;
  isFormVisible = false;
  assignablePeople = ['Person 1', 'Person 2', 'Person 3']; // Replace with actual data source

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      assignedTo: ['', Validators.required],
    });
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
    console.log('Form visibility:', this.isFormVisible); // Check if toggling

  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      const projectData = this.projectForm.value;
      console.log('Project added:', projectData);
      // Add logic to save the project data
    }
  }
}
