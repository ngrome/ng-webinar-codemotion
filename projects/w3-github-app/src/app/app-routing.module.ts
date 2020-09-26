import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users',  loadChildren: () => import('./user-search/user-search.module').then(M => M.UserSearchModule) },
  { path: 'my-profile',  loadChildren: () => import('./user-profile/user-profile.module').then(M => M.UserProfileModule) },
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: '404', loadChildren: () => import('./page-not-found/page-not-found.module').then(M => M.PageNotFoundModule)},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
