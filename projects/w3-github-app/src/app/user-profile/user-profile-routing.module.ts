import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfileContainerPageComponent } from "./pages/profile-container-page/profile-container-page.component";
import { MyInformationsPageComponent } from "./pages/my-informations-page/my-informations-page.component";
import { MyActivitiesPageComponent } from "./pages/my-activities-page/my-activities-page.component";
import {HasGitUsernameGuard} from '../guards/has-git-username.guard';

const routes: Routes = [
  {
    path: "",
    component: ProfileContainerPageComponent,
    children: [
      { path: "", component: MyInformationsPageComponent },
      { path: "my-activities", component: MyActivitiesPageComponent, canActivate: [HasGitUsernameGuard] },
      { path: "**", redirectTo: "" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
