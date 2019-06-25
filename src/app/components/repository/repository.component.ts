import { Repository } from './../../shared/models/repository.model';
import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../shared/services/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repoList: Array<Repository> = new Array();

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit() {
    //Get the value of the current date

    const currentDate = new Date();

    //Create an array of repositories with the returned data

    this.repositoryService.getStarredRepos().subscribe(
      (data) => {
        JSON.parse(JSON.stringify(data)).items.forEach((repo) => {
          this.repoList.push(
            new Repository(
              repo.name,
              repo.description,
              repo.stargazers_count,
              repo.open_issues_count,
              repo.owner.login,
              repo.owner.avatar_url,
              Math.abs(
                currentDate.getDate() - new Date(repo.created_at).getDate()
              )
            )
          );
        });
      },
      (err) => {
        console.error('Error occured!');
      }
    );
  }
}
