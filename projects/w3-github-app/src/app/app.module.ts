import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RepositoryService } from "./services/repository.service";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./shared/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {HasGitUsernameGuard} from './guards/has-git-username.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [RepositoryService, HasGitUsernameGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
