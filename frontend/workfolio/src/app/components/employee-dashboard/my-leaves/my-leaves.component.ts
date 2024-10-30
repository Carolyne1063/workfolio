import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-leaves',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './my-leaves.component.html',
  styleUrl: './my-leaves.component.css'
})
export class MyLeavesComponent {
  leaveForm: FormGroup;
  leaveTypes = ['Medical Leave', 'Annual Leave', 'Casual Leave', 'Maternity Leave', 'Paternity Leave'];
  showForm = false;

  constructor(private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      noOfDays: [{ value: '', disabled: true }],
      leaveType: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  calculateDays(): void {
    const fromDate = new Date(this.leaveForm.get('fromDate')?.value);
    const toDate = new Date(this.leaveForm.get('toDate')?.value);

    if (fromDate && toDate && fromDate <= toDate) {
      const timeDiff = Math.abs(toDate.getTime() - fromDate.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; 
      this.leaveForm.patchValue({ noOfDays: daysDiff });
    } else {
      this.leaveForm.patchValue({ noOfDays: '' });
    }
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      const leaveData = this.leaveForm.value;
      console.log('Leave Application Submitted:', leaveData);
      
      this.toggleForm(); 
    }
  }
}
