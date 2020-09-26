import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GitUser} from '../models/git-user';
import {UserProfile} from '../models/user-profile';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private basePath: string;

  constructor(private http: HttpClient) {
    this.basePath = environment.backendBasePath;
  }

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.basePath + `profile`);
  }

  saveProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>(this.basePath + `profile`, profile);
  }

}
