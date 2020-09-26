import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../../services/user-profile.service';
import {Observable} from 'rxjs';
import {UserProfile} from '../../../models/user-profile';

@Component({
  selector: 'app-my-informations-page',
  templateUrl: './my-informations-page.component.html',
  styleUrls: ['./my-informations-page.component.css']
})
export class MyInformationsPageComponent implements OnInit {
  user$: Observable<UserProfile> = this.userProfile.getProfile();

  constructor(protected userProfile: UserProfileService) { }

  ngOnInit() {
  }

}
