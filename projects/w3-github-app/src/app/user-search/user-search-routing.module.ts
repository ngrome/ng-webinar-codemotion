import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RepoListComponent } from "./pages/repo-list/repo-list.component";
import { UsersListComponent } from "./pages/user-list/user-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: UsersListComponent },
      { path: ":username/repos", component: RepoListComponent },
      { path: "**", redirectTo: "users" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSearchRoutingModule {}
