import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../../services/user-profile.service';
import {Observable} from 'rxjs';
import {UserProfile} from '../../../models/user-profile';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-my-informations-page',
  templateUrl: './my-informations-page.component.html',
  styleUrls: ['./my-informations-page.component.css']
})
export class MyInformationsPageComponent implements OnInit {
  user: UserProfile;

  constructor(protected userProfile: UserProfileService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userProfile.getProfile()
      .subscribe((profile) => this.user = profile);
  }

  saveProfile() {
    this.userProfile.saveProfile(this.user)
      .subscribe((profile) => {
        this.user = profile;
        this.snackBar.open('Profilo salvato con successo', null, {duration: 2000});
      },
        (error => {
          this.snackBar.open('Errore nel salvataggio', 'Riprova', {duration: 2000}).onAction().subscribe(() => this.saveProfile() );
        })
      );
  }
}
