import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/user-list/user-list.component';
import { RepositoryService } from './services/repository.service';
import { HttpClientModule } from '@angular/common/http';
import { RepoListComponent } from './components/repo-list/repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
