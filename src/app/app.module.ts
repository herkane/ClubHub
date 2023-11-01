import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { NewActivityFormComponent } from './components/new-activity-form/new-activity-form.component';
import { StoreModule } from '@ngrx/store';
import {AuthService} from "./auth/auth.service";
import { HttpClientModule } from '@angular/common/http';
import {userReducer} from "../models/reducers/user.reducer";
import { ActivitiesComponent } from './pages/dashboard/sections/activities/activities.component';
import { NewActivityComponent } from './pages/dashboard/sections/new-activity/new-activity.component';
import { ProfileCardsComponent } from './components/profile-cards/profile-cards.component';
import { RequestsComponent } from './pages/dashboard/sections/requests/requests.component';
import { DeleteActivityComponent } from './pages/dashboard/sections/delete-activity/delete-activity.component';
import { PropsitionsComponent } from './pages/dashboard/sections/propsitions/propsitions.component';
import { MembersComponent } from './pages/dashboard/sections/members/members.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import {TruncateWordsPipe} from "./truncate-word.pipe";
import { RequestSentComponent } from './pages/request-sent/request-sent.component';
import {FakeBackendProvider} from "./fake-backend.interceptor";
import {AuthInterceptorProvider} from "./auth/auth.interceptor";
import {HasRolesGuard} from "./auth/has-roles.guard";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    DashboardComponent,
    LandingPageComponent,
    SidebarNavComponent,
    ActivityCardComponent,
    NewActivityFormComponent,
    ActivitiesComponent,
    NewActivityComponent,
    ProfileCardsComponent,
    RequestsComponent,
    DeleteActivityComponent,
    PropsitionsComponent,
    MembersComponent,
    SignupComponent,
    SignupFormComponent,
    SinglePostComponent,
    TruncateWordsPipe,
    RequestSentComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    NgOptimizedImage,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({user: userReducer}, {}),
    ReactiveFormsModule
  ],
  providers: [HasRolesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
