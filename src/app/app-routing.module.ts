import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ActivitiesComponent} from "./pages/dashboard/sections/activities/activities.component";
import {NewActivityFormComponent} from "./components/new-activity-form/new-activity-form.component";
import {NewActivityComponent} from "./pages/dashboard/sections/new-activity/new-activity.component";
import {RequestsComponent} from "./pages/dashboard/sections/requests/requests.component";
import {DeleteActivityComponent} from "./pages/dashboard/sections/delete-activity/delete-activity.component";
import {PropsitionsComponent} from "./pages/dashboard/sections/propsitions/propsitions.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: ActivitiesComponent },
      { path: 'new-activity', component: NewActivityComponent },
      { path: 'delete-activity', component: ActivitiesComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'propositions', component: PropsitionsComponent },
      { path: 'members', component: RequestsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
