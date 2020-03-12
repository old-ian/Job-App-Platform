import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
// EMPLOYEE
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/employee/home/home.component';
import { LoginComponent } from './pages/employee/login/login.component';
import { SignupComponent } from './pages/employee/signup/signup.component';
import { ApplicationsComponent } from './pages/employee/applications/applications.component';
import { CompanyProfileComponent } from './pages/employee/company-profile/company-profile.component';
import { JobComponent } from './pages/employee/job/job.component';
import { JobPreferenceComponent } from './pages/employee/job-preference/job-preference.component';
import { NotificationsComponent } from './pages/employee/notifications/notifications.component';
import { ProfileComponent } from './pages/employee/profile/profile.component';
import { SavedJobsComponent } from './pages/employee/saved-jobs/saved-jobs.component';
import { SearchComponent } from './pages/employee/search/search.component';
import { SignupSetProfileComponent } from './pages/employee/signup-set-profile/signup-set-profile.component';
import { JobsComponent } from './pages/employee/jobs/jobs.component';

// EMPLOYER/COMPANY
import { CompanyLoginComponent } from './pages/company/company-login/company-login.component';
import { CompanySignupComponent } from './pages/company/company-signup/company-signup.component';
import { CompanyNotificationsComponent } from './pages/company/company-notifications/company-notifications.component';
import { EmployeeProfileComponent } from './pages/company/employee-profile/employee-profile.component';
import { JobOfferComponent } from './pages/company/job-offer/job-offer.component';
import { JobRequestComponent } from './pages/company/job-request/job-request.component';
import { SearchEmployeeComponent } from './pages/company/search-employee/search-employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  { path: 'landing', component: LandingComponent },
  // EMPLOYEE
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'company-profile', component: CompanyProfileComponent },
  { path: 'job/:id', component: JobComponent },
  { path: 'preference', component: JobPreferenceComponent },
  { path: 'employee/notifications', component: NotificationsComponent },
  { path: 'employee/profile', component: ProfileComponent },
  { path: 'saved-jobs', component: SavedJobsComponent },
  { path: 'employee/search', component: SearchComponent },
  { path: 'signup/set-up', component: SignupSetProfileComponent },
  { path: 'jobs', component: JobsComponent },
  
  // COMPANY
  { path: 'employer/company-login', component: CompanyLoginComponent },
  { path: 'employer/company-signup', component: CompanySignupComponent },
  { path: 'employer/company-notifications', component: CompanyNotificationsComponent },
  { path: 'employer/employee-profile', component: EmployeeProfileComponent },
  { path: 'employer/company-job-offer', component: JobOfferComponent },
  { path: 'employer/company-job-request', component: JobRequestComponent },
  { path: 'employer/company-search-employee', component: SearchEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
