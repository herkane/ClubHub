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
import {MembersComponent} from "./pages/dashboard/sections/members/members.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {RequestSentComponent} from "./pages/request-sent/request-sent.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'request-sent', component: RequestSentComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: ActivitiesComponent },
      { path: 'post/:id', component: SinglePostComponent },
      { path: 'new-activity', component: NewActivityComponent },
      { path: 'delete-activity/post/:id', component: SinglePostComponent },
      { path: 'propositions/post/:id', component: SinglePostComponent },
      {
        path: 'delete-activity',
        component: DeleteActivityComponent
      },
      { path: 'requests', component: RequestsComponent },
      {
        path: 'propositions',
        component: PropsitionsComponent
      },
      { path: 'members', component: MembersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
