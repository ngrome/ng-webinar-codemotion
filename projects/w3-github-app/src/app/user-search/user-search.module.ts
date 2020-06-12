import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from '../shared/material.module';

import { UserSearchRoutingModule } from "./user-search-routing.module";

import { RepoListComponent } from "./pages/repo-list/repo-list.component";
import { UsersListComponent } from "./pages/user-list/user-list.component";

@NgModule({
  declarations: [RepoListComponent, UsersListComponent],
  imports: [CommonModule, UserSearchRoutingModule, MaterialModule],
})
export class UserSearchModule {}
