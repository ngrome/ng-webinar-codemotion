import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RepositoryService } from '../../services/repository.service';
import { GitUser } from '../../models/git-user';
import { GitRepo } from '../../models/git-repo';

@Component({
  selector: 'app-git-repos',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  private selectedUser: string;

  repos$: Observable<GitRepo[]>;
  owner$: Observable<GitUser>;

  constructor(
    private route: ActivatedRoute,
    private repoService: RepositoryService
  ) { }

  ngOnInit() {
    this.selectedUser =  this.route.snapshot.paramMap.get('username');
    this.getOwnerDetails();
    this.getOwnerRepos();
  }

  private getOwnerDetails() {
    this.owner$ = this.repoService.getUser(this.selectedUser);
  }

  private getOwnerRepos() {
    this.repos$ = this.repoService.getUserRepos(this.selectedUser);
  }

}
