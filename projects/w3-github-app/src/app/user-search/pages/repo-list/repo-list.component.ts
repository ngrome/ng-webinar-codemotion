import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Route, Router } from "@angular/router";
import { Observable } from "rxjs";
import { RepositoryService } from "../../../services/repository.service";
import { GitUser } from "../../../models/git-user";
import { GitRepo } from "../../../models/git-repo";

import { map, take } from "rxjs/operators";

@Component({
  selector: "app-git-repos",
  templateUrl: "./repo-list.component.html",
  styleUrls: ["./repo-list.component.css"],
})
export class RepoListComponent implements OnInit {
  private selectedUser: string;

  repos$: Observable<GitRepo[]>;
  owner$: Observable<GitUser>;

  private languageToFilter: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private repoService: RepositoryService
  ) {}

  ngOnInit() {
    this.selectedUser = this.route.snapshot.paramMap.get("username");

    this.route.queryParams.pipe(take(1)).subscribe((params: Params) => {
      this.languageToFilter = params.languageToFilter;
    });

    this.getOwnerDetails();
    this.getOwnerRepos();
  }

  private getOwnerDetails() {
    this.owner$ = this.repoService.getUser(this.selectedUser);
  }

  private getOwnerRepos() {
    this.repos$ = this.repoService.getUserRepos(this.selectedUser).pipe(
      map((list) => {
        if (!!this.languageToFilter)
          return list.filter(
            (repo: GitRepo) => repo.language === this.languageToFilter
          );
        else return list;
      })
    );
  }

  navigateToRepo(repo) {
    window.open(repo, "_blank");
  }

  goToFilteredRepos(text: string) {
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() =>

      this.router.navigate(["users", this.selectedUser, "repos"], {
        queryParams: { languageToFilter: text }
      })
      
    );
  }
}
