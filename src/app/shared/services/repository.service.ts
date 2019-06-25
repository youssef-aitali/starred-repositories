import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../models/repository.model';

@Injectable()
export class RepositoryService {
  
  //HTML URL for the endpoint of GitHub API data

  private endpoint_url: string =
    'https://api.github.com/search/repositories?q=created:>2019-05-27&sort=stars&order=desc&per_page=100&page=1';

  constructor(private http: HttpClient) {}

  //Method for fetching the most starred Github repos created in the last 30 days

  getStarredRepos(page: number = 1) {
    return this.http.get<Repository>(`${this.endpoint_url}&page=${page}`);
  }
}
