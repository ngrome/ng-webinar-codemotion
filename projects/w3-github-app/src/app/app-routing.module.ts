import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users',  loadChildren: () => import('./user-search/user-search.module').then(M => M.UserSearchModule) },
  { path: 'my-profile',  loadChildren: () => import('./user-profile/user-profile.module').then(M => M.UserProfileModule) },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
