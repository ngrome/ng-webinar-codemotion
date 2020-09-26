import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ConnectableObservable, Observable} from 'rxjs';
import {UserActivity} from '../models/user-activity';
import * as uuid from 'uuid';
import {publish} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserActivitiesService {
  private basePath: string;

  constructor(private http: HttpClient) {
    this.basePath = environment.backendBasePath;
  }

  getActivities(): Observable<UserActivity[]> {
    return this.http.get<UserActivity[]>(this.basePath + `activities`);
  }

  addActivity(activityText: string): Observable<UserActivity> {
    const activity: UserActivity = {
      id: uuid.v4(),
      entry: activityText,
      createdAt: (new Date()).toISOString()
    };
    // return this.http.post<UserActivity>(this.basePath + `activities`, activity);

    const connectableObservable: ConnectableObservable<UserActivity> = this.http.post<UserActivity>(this.basePath + `activities`, activity)
      .pipe(publish()) as ConnectableObservable<UserActivity>;
    connectableObservable.connect();
    return connectableObservable;
  }

  deleteActivity(id: string): Observable<UserActivity> {
    return this.http.delete<UserActivity>(this.basePath + `activities/${id}`);
  }
}
