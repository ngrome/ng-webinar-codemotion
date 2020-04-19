import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/user-list/user-list.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';


const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:username/repos', component: RepoListComponent },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
