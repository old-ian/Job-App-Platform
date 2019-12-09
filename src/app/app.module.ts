import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// LANDING
import { LandingComponent } from './pages/landing/landing.component';

// EMPLOYER
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/employee/login/login.component';
import { HomeComponent } from './pages/employee/home/home.component';
import { JobPreferenceComponent } from './pages/employee/job-preference/job-preference.component';
import { JobComponent } from './pages/employee/job/job.component';
import { SearchComponent } from './pages/employee/search/search.component';
import { SavedJobsComponent } from './pages/employee/saved-jobs/saved-jobs.component';
import { ProfileComponent } from './pages/employee/profile/profile.component';
import { ApplicationsComponent } from './pages/employee/applications/applications.component';
import { NotificationsComponent } from './pages/employee/notifications/notifications.component';
import { SignupComponent } from './pages/employee/signup/signup.component';
import { SignupSetProfileComponent } from './pages/employee/signup-set-profile/signup-set-profile.component';
import { CompanyProfileComponent } from './pages/employee/company-profile/company-profile.component';

// COMPANY
import { JobRequestComponent } from './pages/company/job-request/job-request.component';
import { SearchEmployeeComponent } from './pages/company/search-employee/search-employee.component';
import { JobOfferComponent } from './pages/company/job-offer/job-offer.component';
import { EmployeeProfileComponent } from './pages/company/employee-profile/employee-profile.component';
import { CompanyNotificationsComponent } from './pages/company/company-notifications/company-notifications.component';
import { CompanyLoginComponent } from './pages/company/company-login/company-login.component';
import { CompanySignupComponent } from './pages/company/company-signup/company-signup.component';

// SERVICES
import { ApiService } from './services/api/api.service';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JobPreferenceComponent,
    JobComponent,
    SearchComponent,
    SavedJobsComponent,
    ProfileComponent,
    ApplicationsComponent,
    NotificationsComponent,
    SignupComponent,
    SignupSetProfileComponent,
    CompanyProfileComponent,
    JobRequestComponent,
    SearchEmployeeComponent,
    JobOfferComponent,
    EmployeeProfileComponent,
    LandingComponent,
    CompanyNotificationsComponent,
    CompanyLoginComponent,
    CompanySignupComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
