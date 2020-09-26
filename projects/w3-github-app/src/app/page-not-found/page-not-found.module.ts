import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {ProfileContainerPageComponent} from '../user-profile/pages/profile-container-page/profile-container-page.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageNotFoundModule { }
