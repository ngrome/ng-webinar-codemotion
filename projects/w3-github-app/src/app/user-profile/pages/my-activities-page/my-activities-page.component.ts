import {Component, OnInit} from '@angular/core';
import {UserActivitiesService} from '../../../services/user-activities.service';
import {UserActivity} from '../../../models/user-activity';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-my-activities-page',
  templateUrl: './my-activities-page.component.html',
  styleUrls: ['./my-activities-page.component.css']
})
export class MyActivitiesPageComponent implements OnInit {

  activities: UserActivity[] = [];

  constructor(protected activitiesService: UserActivitiesService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activitiesService.getActivities().subscribe((data) => {
      this.activities = data;
    });
  }

  trackById(index: number, activity: UserActivity): string {
    return activity.id;
  }


  delete(id: string) {
    this.activitiesService.deleteActivity(id)
      .subscribe((deletedActivity) => {
          const index = this.activities.findIndex((activity) => activity.id === id );

          if (index >= 0) {
            this.activities.splice(index, 1);
          }

          this.snackBar.open('Rimosso con successo', null, {duration: 2000});
        },
        (error => {
          this.snackBar.open('Errore nella rimozione', 'Riprova', {duration: 2000}).onAction().subscribe(() => this.delete(id) );
        })
      );
  }
}
