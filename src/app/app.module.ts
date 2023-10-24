import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { NewActivityFormComponent } from './new-activity-form/new-activity-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    DashboardComponent,
    LandingPageComponent,
    SidebarNavComponent,
    ActivityCardComponent,
    NewActivityFormComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    NgOptimizedImage,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
