import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from '../shared/material.module';

import { UserProfileRoutingModule } from "./user-profile-routing.module";
import { ProfileContainerPageComponent } from "./pages/profile-container-page/profile-container-page.component";
import { MyInformationsPageComponent } from "./pages/my-informations-page/my-informations-page.component";
import { MyActivitiesPageComponent } from "./pages/my-activities-page/my-activities-page.component";
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    ProfileContainerPageComponent,
    MyInformationsPageComponent,
    MyActivitiesPageComponent,
  ],
  imports: [CommonModule, UserProfileRoutingModule, MaterialModule, FormsModule, MatSnackBarModule],
})
export class UserProfileModule {}
