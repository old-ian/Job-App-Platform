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
import { JobService } from './services/job/job.service';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Components
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [ApiService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
