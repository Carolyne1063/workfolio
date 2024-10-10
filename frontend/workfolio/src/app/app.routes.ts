import { Routes } from '@angular/router';

import { EmployeeDashboardComponent }from './components/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

export const routes: Routes = [
    { path: 'login', component:LoginRegisterComponent },
    { path: 'employee', component: EmployeeDashboardComponent },
    { path: 'hr', component: HrDashboardComponent},
    { path: '**', redirectTo: 'login' }
];
