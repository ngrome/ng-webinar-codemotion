import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../../services/repository.service';
import { GitUser } from '../../../models/git-user';

@Component({
  selector: 'app-git-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsersListComponent implements OnInit {

  searchTerms: string;
  totalItems: number;
  gitUsers: GitUser[];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private repoService: RepositoryService) { }

  ngOnInit() { }

  searchUser(value: string) {
    this.searchTerms = value;
    this.repoService.getUsers(value).subscribe(
      (resp) => {
        this.totalItems = resp.total_count;
        this.gitUsers = resp.items;
      }
    );
  }

}
