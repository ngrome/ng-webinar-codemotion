import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GitUsersResponse } from '../models/git-responses';
import { GitUser } from '../models/git-user';
import { GitRepo } from '../models/git-repo';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private basePath: string;

  constructor(private http: HttpClient) {
    this.basePath = environment.githubBasePath;
  }

  getUsers(username: string): Observable<GitUsersResponse> {
    return this.http.get<GitUsersResponse>(this.basePath + 'search/users', { params: { q: username }});
  }

  getUser(username: string): Observable<GitUser> {
    return this.http.get<GitUser>(this.basePath + `users/${username}`);
  }

  getUserRepos(username: string): Observable<GitRepo[]> {
    return this.http.get<GitRepo[]>(this.basePath + `users/${username}/repos`);
  }

}
